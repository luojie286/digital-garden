@echo off
chcp 65001 >nul
cd /d "%~dp0"
python tools\build_site.py
if errorlevel 1 (
  echo 构建失败，请检查 Python 及 requirements.txt 依赖。
  pause
  exit /b 1
)
echo 地址: http://localhost:5500/dist/
echo 请保持此窗口开着，按 Ctrl+C 停止服务。
start "" "http://localhost:5500/dist/"
python -m http.server 5500 --bind 127.0.0.1
pause
