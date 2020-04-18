# Место (backend at local "express" server)
Yandex Praktikum single page testwork for Sprint 13 by Max Konovalov

v0.3.0 - First "production" version. Logging and request validation via Joi added.

v0.2.2 - Review bug fixed, helmet module added

v0.2.0 - Authorization via token included

v0.2.1 - Some bug fixed

## About
This testwork is about launch and configure server via "Express" by Node JS for frontend part of Mesto project ([Sprint 11](https://konovaly4.github.io/Praktikum_sprint_11.github.io/)). This version includes MongoDB and Mongoose to contain collections of users and cards. Server provided by Yandex Cloud service.

Project is avaliable at domain [http:/konovalovalov-backend.tk], public IP: [84.201.148.214]

Frontend part is not avaliable.

## Prerequisites

- HTML
- CSS
- JS
- Git
- Webpack
- Node JS ("Express")
- MondoDB (Mongoose)
- Yandex Cloud
- Nginx

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
* Request status: POST
* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
* URL: [http://localhost:3000/signup]
* URL params: none
* Data params: user.json, typed in request body, like this:
```
{
  "name": "username",
  "about": "any description about user",
  "avatar": "link to avatar in URL format",
  "email": "email adress with email format",
  "password": "password with free format"
}
```
* Response: user data with .json format
* Errors: error with actual status and message

2. User's logging in
* Request status: GET
* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
* URL: [http://localhost:3000/signin]
* URL params: none
* Data params: user.json, typed in request body, like this:
```
{
  "email": "email adress with email format",
  "password": "password with free format" (password must be actual to user in database)
}
* Response: token with .json format
* Errors: error with actual status and messages

Note: All functions below avaliable after logging in and receiving thr token.

3. Get users
* Request status: GET
* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
"Authorization": "Bearer (token)"
```
* URL: [http://localhost:3000/users]
* URL params: none
* Data params: none
* Response: users collection with .json format
* Errors: error with actual status and message

4. Get user by ID
* Request status: GET
* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
"Authorization": "Bearer (token)"
```
* URL: [http://localhost:3000/users/:id]
* URL params: /:id must be a string with hash format
* Data params: none 
* Response: user data with .json format
* Errors: error with actual status and message

5. Changing user avatar
* Request status: PATCH
* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
"Authorization": "Bearer (token)"
```
* URL: [http://localhost:3000/users/me/avatar]
* URL params: none
* Data params: user.json, typed in request body, like this:
```
{
  "avatar": "link to avatar in URL format"
}
```
* Response: updated user data with .json format
* Errors: error with actual status and message

6. Creating new card
* Request status: POST
* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
"Authorization": "Bearer (token)"
```
* URL: [http://localhost:3000/cards]
* URL params: none
* Data params: card.json, typed in request body, like this:
```
{
  "name": "cardname",
  "link": "link to card in URL format"
}
```
* Response: card data with .json format
* Errors: error with actual status and message

7. Get cards
* Request status: GET
* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
"Authorization": "Bearer (token)"
```
* URL: [http://localhost:3000/cards]
* URL params: none
* Data params: none
* Response: cards collection with .json format
* Errors: error with actual status and message

8. Deleting card 
* Request status: DELETE
* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
```
* URL: [http://localhost:3000/cards/:cardId]
* URL params: /cardId must be a string with hash format
* Data params: none 
* Response: deleted card data with .json format
* Errors: error with actual status and message

9. Set "like" to card
* Request status: PUT
* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
"Authorization": "Bearer (token)"
```
* URL: [http://localhost:3000/cards/:cardId/likes]
* URL params: /cardId must be a string with hash format
* Data params: none 
* Response: updated card data with .json format ("like" will be a _id in "likes" array)
* Errors: error with actual status and message

10. Unset "like" to card
* Request status: DELETE
* Request headers: 
```
"Accept": "application/json"
"Content-Type": "application/json"
"Authorization": "Bearer (token)"
```
* URL: [http://localhost:3000/cards/:cardId/likes]
* URL params: /cardId must be a string with hash format
* Data params: none 
* Response: updated card data with .json format ("like" will be a _id in "likes" array)
* Errors: error with actual status and message

