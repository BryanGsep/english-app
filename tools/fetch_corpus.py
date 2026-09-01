#!/usr/bin/env python3
"""Quet corpus tu OpenAlex -> corpus/corpus.json.

Chay lai khi muon mo rong nguon tu vung. Chi chay luc BUILD, khong phai luc app chay.
Dung curl qua subprocess vi urllib cua python3.8 tren may nay loi chung chi SSL.
"""
import json, os, re, time, urllib.parse, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# OpenAlex khuyen dat email de vao "polite pool" (nhanh hon, khong bat buoc).
# Dat bien moi truong OPENALEX_MAIL khi chay lai, khong ghi cung dia chi vao repo.
MAIL = os.environ.get("OPENALEX_MAIL", "esp-trainer@example.com")
AUTHOR = "A5061285089"          # Akiyuki Kawasaki
N_AUTHOR = 120                  # so bai cua thay
N_PER_TOPIC = 22                # so bai cung chu de moi topic
N_TOPICS = 9

def get(url):
    out = subprocess.run(
        ["curl", "-s", "--compressed", "--max-time", "40",
         "-A", "esp-trainer/1.0 (mailto:%s)" % MAIL, url],
        capture_output=True, text=True).stdout
    try:
        return json.loads(out)
    except Exception:
        return {"results": []}

def abstract(w):
    ii = w.get("abstract_inverted_index")
    if not ii:
        return ""
    pos = {}
    for word, idxs in ii.items():
        for i in idxs:
            pos[i] = word
    return re.sub(r"\s+", " ", " ".join(pos[k] for k in sorted(pos))).strip()

def doc(w, src):
    return dict(
        src=src, id=w["id"], title=w.get("title") or "",
        year=w.get("publication_year"),
        venue=((w.get("primary_location") or {}).get("source") or {}).get("display_name") or "",
        cited=w.get("cited_by_count", 0),
        topics=[t["display_name"] for t in w.get("topics", [])[:3]],
        kw=[k["display_name"] for k in w.get("keywords", [])[:8]],
        abstract=abstract(w))

docs, seen = [], set()

# 1) bai cua chinh tac gia, nhieu trich dan truoc
for page in range(1, N_AUTHOR // 25 + 2):
    d = get("https://api.openalex.org/works?filter=author.id:%s,has_abstract:true"
            "&sort=cited_by_count:desc&per-page=25&page=%d&mailto=%s" % (AUTHOR, page, MAIL))
    for w in d.get("results", []):
        if w["id"] in seen:
            continue
        seen.add(w["id"])
        docs.append(doc(w, "author"))
    if len(docs) >= N_AUTHOR:
        break
    time.sleep(0.3)
docs = docs[:N_AUTHOR]
print("bai cua tac gia:", len(docs))

# 2) chu de chinh cua tac gia
count = {}
for d0 in docs:
    for t in d0["topics"]:
        count[t] = count.get(t, 0) + 1
top = sorted(count, key=lambda k: -count[k])[:N_TOPICS]
print("chu de:", ", ".join(top))

tids = []
for t in top:
    r = get("https://api.openalex.org/topics?search=%s&per-page=1&mailto=%s"
            % (urllib.parse.quote(t), MAIL))
    if r.get("results"):
        tids.append(r["results"][0]["id"].split("/")[-1])
    time.sleep(0.2)

# 3) bai cung chu de, nhieu trich dan truoc
rel = []
for tid in tids:
    d = get("https://api.openalex.org/works?filter=topics.id:%s,from_publication_date:2012-01-01,"
            "has_abstract:true&sort=cited_by_count:desc&per-page=%d&mailto=%s"
            % (tid, N_PER_TOPIC, MAIL))
    for w in d.get("results", []):
        if w["id"] in seen:
            continue
        seen.add(w["id"])
        rel.append(doc(w, "related"))
    time.sleep(0.3)
print("bai cung chu de:", len(rel))

docs += rel
# bo tai lieu thieu tieu de: cau vi du bat buoc phai truy ve duoc nguon (CLAUDE.md muc 1.5)
docs = [d for d in docs if len(d["abstract"]) > 200 and d["title"].strip()]
os.makedirs(os.path.join(ROOT, "corpus"), exist_ok=True)
json.dump(docs, open(os.path.join(ROOT, "corpus/corpus.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print("TONG:", len(docs), "tai lieu co abstract")
