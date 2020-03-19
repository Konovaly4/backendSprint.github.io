# Место (backend at local "express" server)
Yandex Praktikum single page testwork for Sprint 12 by Max Konovalov

v0.0.3 - Another bug fixed, some improvement added

## About
This testwork is about launch and configure local server via "Express" by Node JS for frontend part of Mesto project ([Sprint 11](https://konovaly4.github.io/Praktikum_sprint_11.github.io/)). Cards and users lists were received as project defaults.

Main functions, such a profile changing or card adding, "temporary" unavaliable .

## Prerequisites

- HTML
- CSS
- JS
- Git
- Webpack
- Node JS ("Express").

# Note
This project was develop as test work of Sprint 12. The goal is to train skills of working via Node JS. 

# How to start
1. Clone this repository
```
$> git clone https://github.com/Konovaly4/sprint12.github.io
```
2. Run project with dev script
```
$> npm run dev
```
3. Open browser at 
```
http://localhost:3000/
```
4. Download and install "Postman" (or any request/response app):
```
https://www.getpostman.com/downloads/
```
5. Make "GET" request at [http://localhost:3000/users] for get users.json with response.
6. Make "GET" request at [http://localhost:3000/users/(id)] for get user.json of user with drawn id with response. You can see id-s in "users.json". If id is incorrect, you receive actual error message.
7. Make "GET" request at [http://localhost:3000/cards] for get cards.json with response.

If URL is incorrect, you receive actual error message.
