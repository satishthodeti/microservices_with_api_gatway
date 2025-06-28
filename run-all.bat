@echo off

echo Installing user-service dependencies...
cd user-service
call npm install
cd ..

echo Installing product-service dependencies...
cd product-service
call npm install
cd ..

echo Installing api-gateway dependencies...
cd api-gateway
call npm install
cd ..

echo Starting all services...
call npm start

echo All services started