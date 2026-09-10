#!/usr/bin/env python3
"""Sinh data/ipa.json (phien am IPA kieu My) cho moi term trong vocab.seed.json.

Nguon: CMU Pronouncing Dictionary (cmusphinx/cmudict, giay phep BSD 2 dieu khoan)
- tu dien phat am that, KHONG doan chu-sang-am. Tu nao khong co trong tu dien va
khong co trong bang EXTRA ben duoi thi de trong, tuyet doi khong bia (CLAUDE.md muc 1.5).

Chay:  python3 tools/build_ipa.py
Lan dau se tai cmudict ve corpus/cmudict.dict (~3.6 MB) roi dung lai mai ve sau.
"""
import json, os, re, sys, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DICT = os.path.join(ROOT, "corpus/cmudict.dict")
URL = "https://raw.githubusercontent.com/cmusphinx/cmudict/master/cmudict.dict"

# Tu chuyen nganh CMUdict khong co. Phan lon ghep tu cac tu CO that trong tu dien
# (baseflow = base + flow); vai tu con lai lay theo phat am chuan cua tu dien Anh.
EXTRA = {
    "analyse":            "AE1 N AH0 L AY2 Z",              # = analyze
    "baseflow":           "B EY1 S F L OW2",                # base + flow
    "decadal":            "D IH0 K AE1 D AH0 L",            # Merriam-Webster
    "downscaling":        "D AW1 N S K EY2 L IH0 NG",       # down + scaling
    "evapotranspiration": "IH0 V AE2 P OW0 T R AE2 N S P IH0 R EY1 SH AH0 N",
    "geospatial":         "JH IY2 OW0 S P EY1 SH AH0 L",    # geo + spatial
    "hydrological":       "HH AY2 D R AH0 L AA1 JH IH0 K AH0 L",
    "hydrology":          "HH AY0 D R AA1 L AH0 JH IY0",    # theo mau geology
    "interannual":        "IH2 N T ER0 AE1 N Y UW0 AH0 L",  # inter + annual
    "intercomparison":    "IH2 N T ER0 K AH0 M P EH1 R AH0 S AH0 N",
    "nowcasting":         "N AW1 K AE2 S T IH0 NG",         # now + casting
    "quantile":           "K W AA1 N T AY2 L",              # theo mau percentile
    "reanalysis":         "R IY2 AH0 N AE1 L AH0 S AH0 S",  # re + analysis
    "sendai":             "S EH1 N D AY2",                  # dia danh Nhat Ban
    "smallholder":        "S M AO1 L HH OW2 L D ER0",       # small + holder
    "snowmelt":           "S N OW1 M EH2 L T",              # snow + melt
    "spatiotemporal":     "S P EY2 SH IY0 OW0 T EH1 M P ER0 AH0 L",
    "streamflow":         "S T R IY1 M F L OW2",            # stream + flow
    "ungauged":           "AH0 N G EY1 JH D",               # un + gauged
}

VOWEL = {
    "AA": "ɑ", "AE": "æ", "AH": "ʌ", "AO": "ɔ", "AW": "aʊ", "AY": "aɪ",
    "EH": "ɛ", "ER": "ɜr", "EY": "eɪ", "IH": "ɪ", "IY": "i", "OW": "oʊ",
    "OY": "ɔɪ", "UH": "ʊ", "UW": "u",
}
CONS = {
    "B": "b", "CH": "tʃ", "D": "d", "DH": "ð", "F": "f", "G": "ɡ", "HH": "h",
    "JH": "dʒ", "K": "k", "L": "l", "M": "m", "N": "n", "NG": "ŋ", "P": "p",
    "R": "r", "S": "s", "SH": "ʃ", "T": "t", "TH": "θ", "V": "v", "W": "w",
    "Y": "j", "Z": "z", "ZH": "ʒ",
}
# am khong nhan trong tieng Anh My: AH0 -> schwa, ER0 -> er nhe
WEAK = {"AH": "ə", "ER": "ər"}

# phu am dau am tiet hop le - chi dung de dat dau nhan dung cho
ONSET2 = set()
for a in "P B T D K G F TH SH".split():
    ONSET2.add((a, "R"))
for a in "P B K G F S".split():
    ONSET2.add((a, "L"))
for a in "T D K G TH S HH".split():
    ONSET2.add((a, "W"))
for a in "P B K F M HH V N T D".split():
    ONSET2.add((a, "Y"))
for b in "P T K M N F L W V".split():
    ONSET2.add(("S", b))
ONSET3 = {("S", a, b) for a in "P T K".split() for b in "R L W Y".split()}


def load_dict():
    if not os.path.exists(DICT):
        sys.stderr.write("tai cmudict ...\n")
        urllib.request.urlretrieve(URL, DICT)
    d = {}
    for line in open(DICT, encoding="utf-8"):
        line = line.split("#")[0].strip()
        if not line:
            continue
        w, _, ph = line.partition(" ")
        d.setdefault(re.sub(r"\(\d+\)$", "", w), ph.split())   # chi lay cach doc dau
    for w, ph in EXTRA.items():
        d.setdefault(w, ph.split())
    return d


def to_ipa(arpa):
    """Chuoi ARPAbet -> IPA, co dau nhan chinh/phu dat dau am tiet."""
    core, stress = [], []
    for p in arpa:
        m = re.match(r"^([A-Z]+)([0-2])?$", p)
        base, st = m.group(1), m.group(2)
        core.append(base)
        stress.append(int(st) if st else None)
    vidx = [i for i, b in enumerate(core) if b in VOWEL]
    if not vidx:
        return ""
    # bien am tiet: lay toi da phu am dau hop le
    starts = {vidx[0]: 0}
    for k in range(1, len(vidx)):
        lo, hi = vidx[k - 1] + 1, vidx[k]
        cl = core[lo:hi]
        take = 0
        if len(cl) >= 3 and tuple(cl[-3:]) in ONSET3:
            take = 3
        elif len(cl) >= 2 and tuple(cl[-2:]) in ONSET2:
            take = 2
        elif len(cl) >= 1 and cl[-1] != "NG":
            take = 1
        starts[vidx[k]] = hi - take
    multi = len(vidx) > 1
    mark = {}
    if multi:
        for i in vidx:
            if stress[i] == 1:
                mark[starts[i]] = "ˈ"
            elif stress[i] == 2:
                mark[starts[i]] = "ˌ"
    out = []
    for i, b in enumerate(core):
        if i in mark:
            out.append(mark[i])
        if b in VOWEL:
            out.append(WEAK[b] if (b in WEAK and stress[i] == 0) else VOWEL[b])
        else:
            out.append(CONS.get(b, ""))
    return "".join(out)


def main():
    d = load_dict()
    seed = json.load(open(os.path.join(ROOT, "data/vocab.seed.json"), encoding="utf-8"))
    out, miss = {}, []
    for c in seed["cards"]:
        term = c["term"]
        parts, ok = [], True
        for w in re.findall(r"[A-Za-z'\-]+", term.lower()):
            arpa = d.get(w)
            if not arpa and "-" in w:                     # tu ghep co gach noi
                bits = [d.get(x) for x in w.split("-") if x]
                if all(bits):
                    arpa = [p for b in bits for p in b]
            if not arpa:
                ok = False
                miss.append(w)
                break
            parts.append(to_ipa(arpa))
        if ok and all(parts):
            out[term] = " ".join(parts)
    path = os.path.join(ROOT, "data/ipa.json")
    json.dump(out, open(path, "w", encoding="utf-8"), ensure_ascii=False,
              indent=0, sort_keys=True)
    print("phien am: %d/%d term" % (len(out), len(seed["cards"])))
    if miss:
        print("  ! khong co trong tu dien:", ", ".join(sorted(set(miss))))


main()
