@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo 正在启动个人博客本地预览...
echo 地址: http://localhost:5500
echo 请保持此窗口开着；关掉窗口 = 网站断开
echo 按 Ctrl+C 可停止服务
echo.

start "" "http://localhost:5500"
python -m http.server 5500

echo.
echo 服务已停止。按任意键关闭窗口...
pause >nul
