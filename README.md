Social Network API
This is a backend API for a social networking application built with NestJS. It provides functionalities for user management, authentication, and friendship management.

Table of Contents
Features
Installation
Usage
User Creation
User Login
Search Users
Friendship Management
Get User with Friends
Accept Friend Request
Get Friend Requests
Delete Friend Request
Technologies Used
Contributing
Features
User registration and management
User authentication with JWT
Searching for users by name and age
Sending and accepting friend requests
Retrieving users along with their friends
Deleting friend requests
Installation
Clone the repository:


bash

npm install
Set up your environment variables. Create a .env file in the root directory:

bash

PORT=5000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
Run the application:

bash

npm run start
Usage
User Creation
Endpoint: POST /auth/register

Request Body:

json

{
  "email": "example@gmail.com",
  "password": "1234",
  "firstName": "Armen",
  "lastName": "Petrosyan",
  "age": 23
}
Response:

json

{
    "id": 9,
    "email": "example@gmail.com",
    "password": "$2a$10$...",
    "firstName": "Armen",
    "lastName": "Petrosyan",
    "age": 23
}
User Login
Endpoint: POST /auth/login

Request Body:

json

{
  "email": "example@gmail.com",
  "password": "1234"
}
Response:

json

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
Search Users
Endpoint: GET /users/search-users

Query Parameters:

firstName: (optional) First name of the user.
lastName: (optional) Last name of the user.
age: (optional) Age of the user.
Example Request:

bash

http://localhost:port/users/search-users?firstName=Ashot&lastName=Hovhannisyan
Response:

json

[
    {
        "id": 5,
        "email": "ashothovhannisyan088@gmail.com",
        "password": "$2a$10$...",
        "firstName": "Ashot",
        "lastName": "Hovhannisyan",
        "age": 23
    },
    ...
]
Friendship Management
Send Friend Request
Endpoint: POST /friendships/:senderId/:receiverId

Example Request:

bash

http://localhost:port/friendships/6/7
Get User with Friends
Endpoint: GET /users/:id

Example Request:

bash

http://localhost:port/users/8
Response:

json

{
    "id": 8,
    "email": "akjfjhsdfdah@gmail.com",
    "password": "$2a$10$...",
    "firstName": "Armen",
    "lastName": "Petrosyan",
    "age": 23,
    "friends": [
        {
            "id": 9,
            "firstName": "Saqo",
            "lastName": "Petrosyan"
        }
    ]
}
Accept Friend Request
Endpoint: POST /friendships/accept/:requestId

Example Request:

bash

http://localhost:port/friendships/accept/id
Get Friend Requests
Endpoint: GET /friendships/requests/:userId

Example Request:

bash

http://localhost:port/friendships/requests/id
Delete Friend Request
Endpoint: DELETE /friendships/:requestId

Example Request:

bash

http://localhost:port/friendships/id
Technologies Used
NestJS
TypeScript
PostgreSQL (or any database you are using)
JWT for authentication
Contributing
Feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).






