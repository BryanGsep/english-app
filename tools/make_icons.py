#!/usr/bin/env python3
"""Sinh icon PWA bang PNG encoder thuan Python (khong can thu vien ngoai)."""
import zlib, struct, math, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BG = (216, 36, 111)                       # hong dam lam nen
WAVES = [((255, 255, 255), 0.40, 1.0, 0.0), ((255, 200, 226), 0.56, 1.15, 1.1)]

def png(path, size):
    rows = []
    for y in range(size):
        row = bytearray([0])                      # filter byte 0 cho moi hang
        for x in range(size):
            u, v = x / size, y / size
            r, g, b = BG
            for (cr, cg, cb), base, freq, phase in WAVES:
                wave = base + 0.105 * math.sin(u * freq * 2 * math.pi * 1.6 + phase)
                d = v - wave
                if 0 <= d < 0.11:                # dai song day ~11% chieu cao
                    a = 1.0 - (d / 0.11) ** 2
                    r = int(r + (cr - r) * a)
                    g = int(g + (cg - g) * a)
                    b = int(b + (cb - b) * a)
                elif d >= 0.11:                  # phan nuoc ben duoi
                    r = int(r + (cr - r) * 0.20)
                    g = int(g + (cg - g) * 0.20)
                    b = int(b + (cb - b) * 0.20)
            row += bytes((r, g, b))
        rows.append(bytes(row))
    raw = zlib.compress(b"".join(rows), 9)

    def chunk(tag, data):
        return (struct.pack(">I", len(data)) + tag + data
                + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF))

    with open(path, "wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n")
        f.write(chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 2, 0, 0, 0)))
        f.write(chunk(b"IDAT", raw))
        f.write(chunk(b"IEND", b""))
    print("  %s (%d x %d, %d bytes)" % (os.path.relpath(path, ROOT), size, size, os.path.getsize(path)))

out = os.path.join(ROOT, "assets/icons")
os.makedirs(out, exist_ok=True)
for s in (192, 512):
    png(os.path.join(out, "icon-%d.png" % s), s)
