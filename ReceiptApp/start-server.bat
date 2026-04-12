@echo off
setlocal enabledelayedexpansion
set PORT=8000
set URL=http://127.0.0.1:%PORT%/index.html
echo Starting local server in %CD% on port %PORT%...
where python >nul 2>&1
if %errorlevel%==0 (
    start "Server" cmd /k "python -m http.server %PORT%"
    timeout /t 1 >nul
    start "App" "%URL%"
    goto end
)
where node >nul 2>&1
if %errorlevel%==0 (
    start "Server" cmd /k "node -e ""const http=require('http'),fs=require('fs'),path=require('path');const port=%PORT%;http.createServer((req,res)=>{let file=path.join(process.cwd(),req.url==='/'?'index.html':req.url);fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('Not found');return;}const ext=path.extname(file).toLowerCase();const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};res.writeHead(200,{'Content-Type':mime[ext]||'text/plain'});res.end(data);});}).listen(port,()=>console.log('Server running at http://127.0.0.1:%PORT%'));"""
    timeout /t 1 >nul
    start "App" "%URL%"
    goto end
)
echo Python and Node are not installed or not on PATH.
echo Install Python 3 or Node.js, then run start-server.bat again.
pause
:end
