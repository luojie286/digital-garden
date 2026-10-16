# -*- coding: utf-8 -*-
"""兼容入口：请改用 tools/rebuild_content.py 或双击 更新内容.bat"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from rebuild_content import main

if __name__ == "__main__":
    main()
