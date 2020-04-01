# Место (backend at local "express" server)
Yandex Praktikum single page testwork for Sprint 13 by Max Konovalov

v0.1.0 - Only backend part avaliable, MongoDB included

## About
This testwork is about launch and configure local server via "Express" by Node JS for frontend part of Mesto project ([Sprint 11](https://konovaly4.github.io/Praktikum_sprint_11.github.io/)). This version includes MongoDB and Mongoose to contain collections of users and cards.

Frontend part is not avaliable.

## Prerequisites

- HTML
- CSS
- JS
- Git
- Webpack
- Node JS ("Express")
- MondoDB (Mongoose)

# Note
This project was develop as test work of Sprint 13. The goal is to train skills of working via MongoDB. 

# How to start
1. Clone this repository
```
$> git clone https://github.com/Konovaly4/backendSprint.github.io
```
2. Install MongoDB with Compass (required additional installation on MacOC).
```
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#install-mdb-edition
```
3. Run database
```
$> mongod
```
4. Run project with dev script in another terminal window
```
$> npm run dev
```
5. Download and install "Postman" (or any request/response app):
```
https://www.getpostman.com/downloads/
```
6. Make "POST" request at [http://localhost:3000/users] with user.json data in request body (and actual headers) to create user.
7. Make "GET" request at [http://localhost:3000/users] to get users.json with response.
8. Make "GET" request at [http://localhost:3000/users/(id)] to get user.json of user with drawn id with response. You can see id-s in Compass database.
9. Make "POST" request at [http://localhost:3000/cards] with card.json data in request body (and actual headers) to create card.
10. Make "GET" request at [http://localhost:3000/cards] to get cards.json with response.
11. Make "DELETE" request at [http://localhost:3000/cards/:cardId] with actual card id at (:cardId) to delete card with named id.
12. Make "PUT" request at [http://localhost:3000/cards/:cardId/likes] to get "like" to card by adding user._id at "likes" array of card.
13. Make "DELETE" request at [http://localhost:3000/cards/:cardId/likes] to remove "like" from card by removing user._id at "likes" array of card.

Every request set a responce with user.json or card.json, that shown at Postman (or any request/response app) in responce body.
If incoming data is incorrect or something else is wrong, you receive actual error message.
