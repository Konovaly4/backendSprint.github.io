# Место (backend at local "express" server)
Yandex Praktikum single page testwork for Sprint 12 by Max Konovalov

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
# How to use
Use Postman (or any request/response app) request fiels to create request and read response data below.
Functions:

1. Create new user
..* Request status: POST
..* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
..* URL: [http://localhost:3000/users]
..* URL params: none
..* Data params: user.json, typed in request body, like this:
```
{
  "name": "username",
  "about": "any description about user",
  "avatar": "link to avatar in URL format"
}
```
..* Response: user data with .json format
..* Errors: error with actual status and message

2. Get users
..* Request status: GET
..* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
..* URL: [http://localhost:3000/users]
..* URL params: none
..* Data params: none
..* Response: users collection with .json format
..* Errors: error with actual status and message

3. Get user by ID
..* Request status: GET
..* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
..* URL: [http://localhost:3000/users/:id]
..* URL params: /:id must be a string with hash format
..* Data params: none 
..* Note: user._id is MongoDB created _id parameter after adding user to database. Get it from database manually via MongoDB Compass.
..* Response: user data with .json format
..* Errors: error with actual status and message

4. Changing user avatar
..* Request status: PATCH
..* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
..* URL: [http://localhost:3000/users/me/avatar]
..* URL params: none
..* Data params: user.json, typed in request body, like this:
```
{
  "avatar": "link to avatar in URL format"
}
```
..* Response: updated user data with .json format
..* Errors: error with actual status and message

5. Creating new card
..* Request status: POST
..* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
..* URL: [http://localhost:3000/cards]
..* URL params: none
..* Data params: card.json, typed in request body, like this:
```
{
  "name": "cardname",
  "link": "link to card in URL format"
}
```
..* Response: card data with .json format
..* Errors: error with actual status and message

6. Get cards
..* Request status: GET
..* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
..* URL: [http://localhost:3000/cards]
..* URL params: none
..* Data params: none
..* Response: cards collection with .json format
..* Errors: error with actual status and message

7. Deleting card 
..* Request status: DELETE
..* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
..* URL: [http://localhost:3000/cards/:cardId]
..* URL params: /cardId must be a string with hash format
..* Data params: none 
..* Note: cardId is MongoDB created _id parameter after adding card to database. Get it from database manually via MongoDB Compass.
..* Response: deleted card data with .json format
..* Errors: error with actual status and message

8. Set "like" to card
..* Request status: PUT
..* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
..* URL: [http://localhost:3000/cards/:cardId/likes]
..* URL params: /cardId must be a string with hash format
..* Data params: none 
..* Note: cardId is MongoDB created _id parameter after adding card to database. Get it from database manually via MongoDB Compass
..* Response: updated card data with .json format ("like" will be a _id in "likes" array)
..* Errors: error with actual status and message

9. Unset "like" to card
..* Request status: DELETE
..* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
..* URL: [http://localhost:3000/cards/:cardId/likes]
..* URL params: /cardId must be a string with hash format
..* Data params: none 
..* Note: cardId is MongoDB created _id parameter after adding card to database. Get it from database manually via MongoDB Compass
..* Response: updated card data with .json format ("like" will be a _id in "likes" array)
..* Errors: error with actual status and message

