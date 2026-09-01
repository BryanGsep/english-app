#!/usr/bin/env python3
"""Liet ke ung vien thuat ngu tu corpus/corpus.json, bo nhung tu da co trong seed.
In ra bang tan suat de nguoi viet chon tay -> them vao data/vocab.seed.json."""
import json, re, os, collections, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
docs = json.load(open(os.path.join(ROOT, "corpus/corpus.json"), encoding="utf-8"))
seed = json.load(open(os.path.join(ROOT, "data/vocab.seed.json"), encoding="utf-8"))
have = {c["term"].lower() for c in seed["cards"]}
head = {c["term"].lower().split()[-1] for c in seed["cards"]}

STOP = set("""a an the and or but if while of in on at to for from by with without into onto over
under between among during through as is are was were be been being has have had do does did not
no nor so than then that this these those it its their there here we our us they them he she which
who whom whose what when where how why can could may might must shall should will would also such
more most much many few less least other others both each any all some same own very per via due
etc using used use uses based well within across upon about after before above below out up down
off again further only just even still yet however therefore thus moreover furthermore one two
three four five six seven eight nine ten new non pre post inter multi high low large small good
better best case cases study studies result results show shows shown showed found find findings
paper article research work works method methods approach approaches analysis analyses data value
values year years time times area areas well however between order given three-dimensional
different various several including include includes provide provides provided obtain obtained
present presented presents propose proposed suggest suggests indicate indicates consider
considered respectively addition additional example examples general generally particular
particularly important significant significantly effective largely mainly overall total number
numbers level levels type types part parts point points first second third finally""".split())

def sents(t):
    return [re.sub(r"\s+", " ", s).strip()
            for s in re.split(r"(?<=[.!?])\s+", t) if 40 < len(s.strip()) < 300]

uni, bi, tri = collections.Counter(), collections.Counter(), collections.Counter()
dfu, dfb, dft = collections.defaultdict(set), collections.defaultdict(set), collections.defaultdict(set)

for i, d in enumerate(docs):
    for s in sents(d["title"] + ". " + d["abstract"]):
        ws = [w.lower() for w in re.findall(r"[A-Za-z][A-Za-z\-]+", s)]
        for w in ws:
            if len(w) > 3 and w not in STOP:
                uni[w] += 1; dfu[w].add(i)
        for a, b in zip(ws, ws[1:]):
            if a in STOP or b in STOP or len(a) < 4 or len(b) < 4: continue
            bi[a + " " + b] += 1; dfb[a + " " + b].add(i)
        for a, b, c in zip(ws, ws[1:], ws[2:]):
            if a in STOP or c in STOP or len(a) < 4 or len(c) < 3: continue
            tri[a + " " + b + " " + c] += 1; dft[a + " " + b + " " + c].add(i)

def dump(counter, df, lo, cap, label):
    rows = []
    for t, n in counter.most_common():
        if len(df[t]) < lo or t in have:
            continue
        rows.append((t, n, len(df[t])))
        if len(rows) >= cap:
            break
    print("\n--- %s (%d) ---" % (label, len(rows)))
    print(", ".join("%s:%d/%d" % r for r in rows))
    return rows

n = int(sys.argv[1]) if len(sys.argv) > 1 else 400
dump(tri, dft, 4, n // 3, "TRIGRAM  term:tanso/sobai")
dump(bi, dfb, 5, n, "BIGRAM   term:tanso/sobai")
dump(uni, dfu, 6, n, "UNIGRAM  term:tanso/sobai")
print("\ncorpus: %d tai lieu | seed hien co: %d tu" % (len(docs), len(seed["cards"])))
