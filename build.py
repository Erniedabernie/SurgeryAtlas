#!/usr/bin/env python3
"""Build the single-page app from src/.

  python3 build.py                 -> index.html (hosted build, with home-screen links)
  python3 build.py --artifact OUT  -> OUT (same page without the home-screen links)
"""
import glob, re, sys
from pathlib import Path

src = Path(__file__).parent / "src"
read = lambda p: Path(p).read_text(encoding="utf-8")

order = ["lap-appendicectomy", "lap-cholecystectomy", "open-inguinal-hernia", "hemithyroidectomy"]
files = sorted(glob.glob(str(src / "data" / "*.js")),
               key=lambda f: (order.index(Path(f).stem) if Path(f).stem in order else 99, f))
data = "const P = [];\n" + "\n".join(read(f) for f in files)

page = (read(src / "head.html") + read(src / "app.css") + "</style>\n</head>\n<body>\n"
        + read(src / "defs.html") + "\n" + read(src / "body.html")
        + "\n<script>\n" + data + "\n" + read(src / "app.js") + "</script>\n</body>\n</html>\n")

if "--artifact" in sys.argv:
    out = Path(sys.argv[sys.argv.index("--artifact") + 1])
    page = re.sub(r"<!--pwa-->.*?<!--/pwa-->\n", "", page, flags=re.S)
else:
    out = Path(__file__).parent / "index.html"
    page = page.replace("<!--pwa-->\n", "").replace("<!--/pwa-->\n", "")
out.write_text(page, encoding="utf-8")
print(out, len(page))
