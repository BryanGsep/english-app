#!/bin/bash
# Kiem tra app khi duoc phuc vu qua HTTP trong THU MUC CON — dung nhu GitHub Pages
# phuc vu project site tai https://<user>.github.io/<repo>/. Xem CLAUDE.md muc 8.
# Chay tren mot BAN COPY tam cua du an, khong dung toi thu muc that.
set -uo pipefail
cd "$(dirname "$0")/.."
APP="$PWD"; NAME="$(basename "$APP")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=8731
ROOT="$(mktemp -d)"; PROFILE="$(mktemp -d)"
trap 'kill ${SRV:-0} >/dev/null 2>&1; rm -rf "$ROOT" "$PROFILE"' EXIT
mkdir -p "$ROOT/$NAME"
tar -C "$APP" -cf - --exclude .git . | tar -C "$ROOT/$NAME" -xf -

# Trang kiem tra PWA phai nam o GOC app thi service worker moi co scope toan app.
cat > "$ROOT/$NAME/swcheck.html" <<'HTML'
<!doctype html><html><head><meta charset="utf-8"><title>sw check</title></head><body>
<iframe id="f" src="index.html" style="width:360px;height:600px;border:0"></iframe>
<pre id="RESULT">running…</pre>
<script>
var out = [];
function flush(){ document.getElementById('RESULT').textContent = out.join('\n'); }
function fin(){ out.push('KET QUA: ' + (out.some(function(l){return l.indexOf('FAIL')===0;}) ? 'HONG':'DAT')); flush(); }
document.getElementById('f').addEventListener('load', function () {
  var w = document.getElementById('f').contentWindow;
  out.push((w.VOCAB && w.VOCAB.cards.length ? 'OK   ':'FAIL ') + 'vocab nap qua HTTP: ' + ((w.VOCAB&&w.VOCAB.cards.length)||0) + ' the');
  out.push((w.Games && w.Games.all().length===8 ? 'OK   ':'FAIL ') + 'game dang ky: ' + ((w.Games&&w.Games.all().length)||0) + '/8');
  out.push((w.document.querySelector('#view .path') ? 'OK   ':'FAIL ') + 'trang chu render'); flush();
  fetch('manifest.webmanifest').then(function(r){ return r.ok ? r.json() : null; }).then(function(m){
    out.push((m && m.icons.length ? 'OK   ':'FAIL ') + 'manifest: ' + (m ? m.icons.length+' icon, start_url '+m.start_url : 'khong tai duoc')); flush();
    return Promise.all(((m&&m.icons)||[]).map(function(i){ return fetch(i.src).then(function(r){return r.ok;}); }));
  }).then(function(oks){
    out.push((oks.length && oks.every(Boolean) ? 'OK   ':'FAIL ') + 'icon tai duoc: ' + oks.filter(Boolean).length + '/' + oks.length); flush();
    return fetch('sw.js');
  }).then(function(r){
    out.push((r.ok ? 'OK   ':'FAIL ') + 'sw.js phuc vu duoc tu goc app (scope toan app)');
    // Chrome headless khong dang ky duoc service worker (promise treo, khong resolve
    // cung khong reject) -> logic SW duoc kiem bang `node tools/sw_test.js`.
    fin();
  }).catch(function(e){ out.push('FAIL loi: ' + (e && e.message)); fin(); });
});
</script></body></html>
HTML

set +m                      # tat job control -> khong in "Terminated" khi don dep
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ROOT" >/dev/null 2>&1 &
SRV=$!
disown $SRV 2>/dev/null || true
for _ in $(seq 1 40); do
  curl -sf "http://127.0.0.1:$PORT/$NAME/index.html" -o /dev/null && break
  perl -e 'select undef,undef,undef,0.1'
done

BASE="http://127.0.0.1:$PORT/$NAME"
echo "phuc vu tai $BASE/  (mo phong GitHub Pages project site)"
FAIL=0

echo
echo "== Ma HTTP cua tung file =="
for f in index.html manifest.webmanifest sw.js .nojekyll assets/css/app.css \
         assets/icons/icon-192.png assets/icons/icon-512.png data/vocab.js \
         assets/js/games/registry.js assets/js/app.js; do
  CODE=$(curl -s -o /dev/null -w '%{http_code}' "$BASE/$f")
  [ "$CODE" = "200" ] || { FAIL=1; echo "  ! $CODE  $f"; }
done
[ $FAIL -eq 0 ] && echo "  tat ca tra ve 200"

dump () {   # $1 = URL, $2 = virtual time budget (ms), $3 = tran thoi gian that (s)
  local out; out="$(mktemp)"
  "$CHROME" --headless --disable-gpu --no-sandbox --user-data-dir="$PROFILE" \
    --virtual-time-budget="$2" --dump-dom "$1" >"$out" 2>/dev/null &
  local cp=$!
  ( sleep "$3"; kill -9 $cp 2>/dev/null ) & local wd=$!
  wait $cp 2>/dev/null; kill $wd 2>/dev/null
  python3 -c "import sys,re,html;s=open('$out',encoding='utf-8',errors='replace').read();m=re.search(r'<pre id=\"RESULT\"[^>]*>(.*?)</pre>',s,re.S);print(html.unescape(m.group(1)) if m else 'KHONG DOC DUOC KET QUA (Chrome khong tra ve gi)')"
  rm -f "$out"
}

echo
echo "== PWA: manifest, icon, app khoi dong qua HTTP =="
OUT=$(dump "$BASE/swcheck.html" 30000 60); echo "$OUT"
echo "$OUT" | grep -q "KET QUA: DAT" || FAIL=1

echo
echo "== Logic service worker (chay bang Node, khong can trinh duyet) =="
node tools/sw_test.js || FAIL=1

echo
echo "== Choi thu tung game qua HTTP =="
OUT=$(dump "$BASE/tools/smoke.html" 900000 240); echo "$OUT" | tail -4
echo "$OUT" | grep -q "KET QUA: DAT" || FAIL=1

echo
echo "Luu y: viec DANG KY service worker that su chi kiem duoc tren trinh duyet that"
echo "(Chrome headless treo o buoc nay). Sau khi deploy, mo bang dien thoai, bat che do"
echo "may bay va tai lai — app phai van chay."
echo
[ $FAIL -eq 0 ] && echo "KIEM TRA GITHUB PAGES: DAT" || echo "KIEM TRA GITHUB PAGES: HONG"
exit $FAIL
