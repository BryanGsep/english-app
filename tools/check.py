#!/usr/bin/env python3
"""Kiem tra tinh toan ven cua du lieu va cau hinh nap script. Xem CLAUDE.md muc 7."""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
err, warn = [], []

seed = json.load(open(os.path.join(ROOT, "data/vocab.seed.json"), encoding="utf-8"))
js = open(os.path.join(ROOT, "data/vocab.js"), encoding="utf-8").read()
m = re.match(r"^//[^\n]*\nwindow\.VOCAB = (.*);\n$", js, re.S)
if not m:
    err.append("data/vocab.js sai dinh dang (phai la 'window.VOCAB = {...};')")
    sys.exit("\n".join(err))
vocab = json.loads(m.group(1))

deck_ids = {d["id"] for d in vocab["decks"]}
for d in vocab["decks"]:
    for f in ("id", "name", "icon", "desc"):
        if not d.get(f):
            err.append("deck %s thieu truong %s" % (d.get("id"), f))

seen = set()
for c in vocab["cards"]:
    for f in ("id", "term", "pos", "vi", "en", "deck"):
        if not c.get(f):
            err.append("the %s thieu truong %s" % (c.get("id") or c.get("term"), f))
    if c["id"] in seen:
        err.append("id trung: " + c["id"])
    seen.add(c["id"])
    if c["deck"] not in deck_ids:
        err.append("the %s tro toi deck la '%s'" % (c["id"], c["deck"]))
    if c["pos"] not in ("n", "v", "adj", "adv", "phr"):
        err.append("the %s co pos la '%s'" % (c["id"], c["pos"]))
    if c["ex"] and not c["src"]:
        err.append("the %s co vi du nhung khong co nguon" % c["id"])

if len(vocab["cards"]) != len(seed["cards"]):
    err.append("vocab.js (%d the) lech voi seed (%d the) - chay lai build_vocab.py"
               % (len(vocab["cards"]), len(seed["cards"])))

# moi file game phai duoc nap trong index.html, dung thu tu
html = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
srcs = re.findall(r'<script src="([^"]+)"', html)
core = ["data/vocab.js", "assets/js/store.js", "assets/js/srs.js", "assets/js/data.js",
        "assets/js/ui.js", "assets/js/games/registry.js"]
pos = {s: i for i, s in enumerate(srcs)}
for f in core:
    if f not in pos:
        err.append("index.html thieu <script src=\"%s\">" % f)
if all(f in pos for f in core) and sorted(pos[f] for f in core) != [pos[f] for f in core]:
    err.append("index.html nap script sai thu tu (xem CLAUDE.md muc 2)")
if "assets/js/app.js" in pos and pos["assets/js/app.js"] != len(srcs) - 1:
    err.append("app.js phai la script cuoi cung")

gdir = os.path.join(ROOT, "assets/js/games")
for f in sorted(os.listdir(gdir)):
    if f.endswith(".js") and "assets/js/games/" + f not in pos:
        err.append("game %s chua duoc nap trong index.html" % f)

# moi game dang ky phai co du truong bat buoc
for f in sorted(os.listdir(gdir)):
    if not f.endswith(".js") or f == "registry.js":
        continue
    body = open(os.path.join(gdir, f), encoding="utf-8").read()
    for k in ("id:", "name:", "icon:", "mount:"):
        if k not in body:
            err.append("%s thieu truong %s trong Games.register" % (f, k))
    if "Store.record" in body or "SRS.grade" in body:
        err.append("%s tu ghi vao SRS - viec do thuoc ve app.js (CLAUDE.md muc 5)" % f)

# --- hiem hoa khi deploy len GitHub Pages ---
for dirpath, dirnames, filenames in os.walk(ROOT):
    if ".git" in dirpath:
        continue
    dirnames[:] = [d for d in dirnames if d not in (".git", ".github")]
    for name in dirnames + filenames:
        if name.startswith("_"):
            rel = os.path.relpath(os.path.join(dirpath, name), ROOT)
            err.append("'%s' bat dau bang '_' - Jekyll cua GitHub Pages se bo qua no" % rel)
if not os.path.exists(os.path.join(ROOT, ".nojekyll")):
    err.append("thieu file .nojekyll o goc du an (GitHub Pages se chay Jekyll)")

for rel in ("index.html", "assets/css/app.css", "sw.js", "manifest.webmanifest"):
    fp = os.path.join(ROOT, rel)
    if not os.path.exists(fp):
        err.append("thieu file %s" % rel)
        continue
    body = open(fp, encoding="utf-8").read()
    for m in re.finditer(r'(?:src|href)="(/[^"/][^"]*)"', body):
        err.append("%s dung duong dan tuyet doi '%s' - hong khi deploy vao thu muc con"
                   % (rel, m.group(1)))

# moi asset service worker cache phai ton tai that
sw = open(os.path.join(ROOT, "sw.js"), encoding="utf-8").read() if os.path.exists(os.path.join(ROOT, "sw.js")) else ""
m = re.search(r"var ASSETS = \[(.*?)\];", sw, re.S)
if m:
    for a in re.findall(r"'([^']+)'", m.group(1)):
        if a != "./" and not os.path.exists(os.path.join(ROOT, a)):
            err.append("sw.js cache file khong ton tai: %s" % a)
    for rel in srcs + ["assets/css/app.css"]:
        if "./" + rel not in m.group(1):
            err.append("sw.js chua cache %s - se hong khi offline" % rel)

no_ex = [c["id"] for c in vocab["cards"] if not c["ex"]]
if no_ex:
    warn.append("%d the khong co cau vi du trong corpus: %s"
                % (len(no_ex), ", ".join(no_ex[:6]) + ("..." if len(no_ex) > 6 else "")))

print("decks: %d | cards: %d | co vi du: %d"
      % (len(vocab["decks"]), len(vocab["cards"]),
         sum(1 for c in vocab["cards"] if c["ex"])))
for w in warn:
    print("  ~ CANH BAO:", w)
for e in err:
    print("  ! LOI:", e)
print("KET QUA:", "DAT" if not err else "HONG (%d loi)" % len(err))
sys.exit(1 if err else 0)
