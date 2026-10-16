@echo off
chcp 65001 >nul
cd /d "%~dp0"
set PYTHONUTF8=1
python tools\build_site.py
if errorlevel 1 goto failed
python tools\test_content.py
if errorlevel 1 goto failed
where node >nul 2>nul
if errorlevel 1 goto done
node tools\test_frontend.cjs
if errorlevel 1 goto failed
:done
echo.
echo 构建和检查通过，dist 文件夹可用于发布。
pause
exit /b 0
:failed
echo 构建或检查失败，请查看上面的错误。
pause
exit /b 1
