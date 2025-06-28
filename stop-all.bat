@echo off
echo 🔴 Killing ports 3000, 3001, 3002...

for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do taskkill /PID %%a /F
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3001') do taskkill /PID %%a /F
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3002') do taskkill /PID %%a /F

echo ✅ Ports freed successfully.
pause
