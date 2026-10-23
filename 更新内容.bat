@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo ========================================
echo   更新内容：扫描课程 / 项目资料 / 画作 / 音乐
echo   并生成 learning / gallery / music 数据
echo ========================================
echo.

python tools\rebuild_content.py
if errorlevel 1 (
  echo.
  echo 失败：请确认已安装 Python，并可在命令行运行 python。
  pause
  exit /b 1
)

echo.
pause
