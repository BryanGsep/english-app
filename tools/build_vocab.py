#!/usr/bin/env python3
"""Sinh data/vocab.js tu data/vocab.seed.json + corpus/corpus.json.
KHONG sua tay data/vocab.js. Xem CLAUDE.md muc 7."""
import json, re, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
seed = json.load(open(os.path.join(ROOT, "data/vocab.seed.json"), encoding="utf-8"))
corpus = json.load(open(os.path.join(ROOT, "corpus/corpus.json"), encoding="utf-8"))

def slug(t):
    return re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")

def variants(term, pos):
    """Cac dang chia cua term de bat trong cau that."""
    v = {term}
    head = term.split()[-1]
    def infl(w):
        out = {w}
        if w.endswith("y") and len(w) > 3 and w[-2] not in "aeiou":
            out |= {w[:-1] + "ies", w[:-1] + "ied"}
        elif w.endswith(("s", "x", "z", "ch", "sh")):
            out |= {w + "es"}
        else:
            out |= {w + "s"}
        if pos == "v":
            if w.endswith("e"):
                out |= {w + "d", w[:-1] + "ing"}
            else:
                out |= {w + "ed", w + "ing"}
        return out
    pre = term[: -len(head)]
    for h in infl(head):
        v.add(pre + h)
    if pos == "n" and " " not in term:
        v |= infl(term)
    return {x.lower() for x in v}

def sentences(text):
    out = []
    for s in re.split(r"(?<=[.!?])\s+(?=[A-Z(])", text):
        s = re.sub(r"\s+", " ", s).strip()
        s = re.sub(r"^(Abstract|ABSTRACT)[:.\s]+", "", s)
        if 45 <= len(s) <= 330:
            out.append(s)
    return out

# (cau, tieu de bai bao) tren toan corpus
pool = []
for d in corpus:
    title = (d.get("title") or "").strip()
    if not title:
        continue          # khong co nguon thi khong dung lam vi du
    for s in sentences((title + ". " + (d.get("abstract") or ""))):
        pool.append((s, s.lower(), title))

cards, ids, warn = [], set(), []
for c in seed["cards"]:
    cid = slug(c["term"])
    if cid in ids:
        warn.append("TRUNG id: " + cid)
        continue
    ids.add(cid)
    vs = sorted(variants(c["term"], c["pos"]), key=len, reverse=True)
    pat = re.compile(r"(?<![a-z])(?:" + "|".join(re.escape(v) for v in vs) + r")(?![a-z])")
    key = os.path.commonprefix(vs)                   # loc tho cho nhanh, khong bo sot
    freq, best = 0, None
    for s, low, title in pool:
        if key not in low:
            continue
        hit = len(pat.findall(low))
        if not hit:
            continue
        freq += hit
        # cau ngan, ro y nhat thang
        score = abs(len(s) - 130) + (0 if s.rstrip().endswith(".") else 40)
        if best is None or score < best[0]:
            best = (score, s, title)
    if best is None:
        warn.append("KHONG co vi du: " + c["term"])
    cards.append({
        "id": cid, "term": c["term"], "pos": c["pos"], "vi": c["vi"],
        "en": c["en"], "deck": c["deck"], "freq": freq,
        "ex": best[1] if best else "", "src": best[2] if best else "",
    })

cards.sort(key=lambda c: (c["deck"], -c["freq"], c["term"]))
out = {"decks": seed["decks"], "cards": cards,
       "meta": {"corpus": len(corpus),
                "author": "Akiyuki Kawasaki - Dept. of Civil Engineering, The University of Tokyo",
                "source": "OpenAlex"}}

js = ("// SINH TU DONG boi tools/build_vocab.py - KHONG SUA TAY.\n"
      "window.VOCAB = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
open(os.path.join(ROOT, "data/vocab.js"), "w", encoding="utf-8").write(js)

print("cards: %d | co vi du: %d | freq=0: %d"
      % (len(cards), sum(1 for c in cards if c["ex"]), sum(1 for c in cards if not c["freq"])))
for w in warn:
    print("  !", w)
