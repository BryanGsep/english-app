#!/usr/bin/env python3
"""Liet ke nhung cau vi du / the con thieu ghi chu tieng Viet trong data/notes.seed.json.

Chay:  python3 tools/notes_todo.py [tu] [den]
In ra tung cum: khoa cau, cau tieng Anh, va cac the lay cau do lam vi du.
"""
import json, os, sys, hashlib
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
s = open(os.path.join(ROOT, "data/vocab.js"), encoding="utf-8").read()
voc = json.loads(s[s.index("{"):s.rindex("}") + 1])
notes = json.load(open(os.path.join(ROOT, "data/notes.seed.json"), encoding="utf-8"))

groups = {}
for c in voc["cards"]:
    if c.get("ex"):
        groups.setdefault(c["ex"], []).append(c)
order = sorted(groups.items(), key=lambda kv: -max(x["freq"] for x in kv[1]))

todo = []
for ex, cs in order:
    k = hashlib.sha1(ex.encode("utf-8")).hexdigest()[:8]
    need_d = k not in notes["dich"]
    need_y = [c for c in cs if c["id"] not in notes["y"]]
    if need_d or need_y:
        todo.append((k, ex, cs, need_d, need_y))

a = int(sys.argv[1]) if len(sys.argv) > 1 else 0
b = int(sys.argv[2]) if len(sys.argv) > 2 else len(todo)
print("# con thieu: %d cum (hien %d..%d)" % (len(todo), a, min(b, len(todo))))
for k, ex, cs, need_d, need_y in todo[a:b]:
    print("\n@ %s%s" % (k, "" if need_d else "  [da co ban dich]"))
    print("  EN: " + ex)
    for c in cs:
        flag = "" if c in need_y else "  [da co]"
        print("  - %s | %s (%s) = %s%s" % (c["id"], c["term"], c["pos"], c["vi"], flag))
