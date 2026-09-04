#!/bin/bash
# Chay toan bo kiem tra truoc khi bao xong. Xem CLAUDE.md muc 7.
set -uo pipefail
cd "$(dirname "$0")/.."
ROOT="$PWD"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
FAIL=0

echo "== 1. Toan ven du lieu =="
python3 tools/check.py || FAIL=1

echo
echo "== 2. Cu phap JavaScript =="
if command -v node >/dev/null; then
  for f in assets/js/*.js assets/js/games/*.js data/vocab.js; do
    node --check "$f" || { echo "  ! LOI cu phap: $f"; FAIL=1; }
  done
  echo "  tat ca file deu parse duoc"
else
  echo "  (bo qua: khong tim thay node)"
fi

echo
echo "== 3. Logic service worker (cache offline) =="
if command -v node >/dev/null; then
  node tools/sw_test.js || FAIL=1
else
  echo "  (bo qua: khong tim thay node)"
fi

echo
echo "== 4. Tuong thich nguoc voi nguoi dung cu =="
if command -v node >/dev/null && git -C "$ROOT" rev-parse HEAD >/dev/null 2>&1; then
  node tools/upgrade_test.js || FAIL=1
else
  echo "  (bo qua: can node va mot commit HEAD de so sanh)"
fi

if [ ! -x "$CHROME" ]; then
  echo; echo "== 5-6. Bo qua: khong tim thay Google Chrome =="
  exit $FAIL
fi

run_dom () {  # $1 = file html, $2 = virtual time budget (ms), $3 = tran thoi gian that (s)
  local out; out="$(mktemp)"
  "$CHROME" --headless --disable-gpu --no-sandbox --allow-file-access-from-files \
    --virtual-time-budget="$2" --dump-dom "file://$ROOT/$1" >"$out" 2>/dev/null &
  local cp=$!
  ( sleep "$3"; kill -9 $cp 2>/dev/null ) & local wd=$!
  wait $cp 2>/dev/null; kill $wd 2>/dev/null
  python3 -c "import sys,re,html;s=open('$out',encoding='utf-8',errors='replace').read();m=re.search(r'<pre id=\"RESULT\"[^>]*>(.*?)</pre>',s,re.S);print(html.unescape(m.group(1)) if m else 'KHONG DOC DUOC KET QUA (Chrome khong tra ve gi)')"
  rm -f "$out"
}

echo
echo "== 5. Choi thu tung game bang robot =="
OUT=$(run_dom tools/smoke.html 900000 240)
echo "$OUT"
echo "$OUT" | grep -q "KET QUA: DAT" || FAIL=1

echo
echo "== 6. Tran ngang o be rong 360px =="
OUT=$(run_dom tools/frame.html 8000 60)
echo "$OUT"
echo "$OUT" | grep -q "TRAN:" && { echo "  ! Co phan tu tran ra ngoai 360px"; FAIL=1; }

echo
[ $FAIL -eq 0 ] && echo "TAT CA KIEM TRA: DAT" || echo "TAT CA KIEM TRA: HONG"
exit $FAIL
