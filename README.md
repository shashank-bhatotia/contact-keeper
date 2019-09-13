# Contact Keeper

> Full stack MERN contact manager with React hooks, context & JWT authentication.

This is the full app. The API with documented endpoints is documented [here](https://github.com/shashxalt/contact-keeper#contact-keeper-api)

## Usage

Install dependencies

```bash
npm install
npm client-install
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```

# Contact Keeper API

This is a Node/Express/MongoDB REST API for contacts that uses JWT authentication. All contact endpoints are protected and each registered user has their own contacts. 

## Getting Started

```
  Open the config/default.json file and add your mongoURI and your jwtSecret
```

```bash
  npm install
  npm run server # Runs on http://localhost:5000
```

# API Usage & Endpoints

## Register a User [POST /api/users]

- Request: Add user and request JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "password": ""
            }

- Response: 200 (application/json)

  - Body

          {
            "token": ""
          }

## Login with a User [POST /api/auth]

- Request: Login with credentials to recieve a JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "email": "",
              "password": ""
            }

- Response: 200 (application/json)

  - Body

          {
            "token": ""
          }

## Get Contacts [GET /api/contacts]

- Request: Get all contacts of a specific user

  - Headers

        x-auth-token: YOURJWT

* Response: 200 (application/json)

  - Body

          {
            "contacts": []
          }

## Add New Contact [POST /api/contacts]

- Request: Add a new contact

  - Headers

        x-auth-token: YOURJWT
        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "phone": "",
              "type": "" [personal or professional]
            }

- Response: 200 (application/json)

  - Body

          {
            "contact": {}
          }

## Update Contact [PUT /api/contacts/:id]

- Request: Update existing contact

  - Parameters

    - id: 1 (number) - An unique identifier of the contact.

  - Headers

        x-auth-token: YOURJWT
        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "phone": "",
              "type": "" [personal or professional]
            }

- Response: 200 (application/json)

  - Body

          {
            "contact": {}
          }

## Delete Contact [DELETE /api/contacts/:id]

- Request: Delete existing contact

  - Parameters

    - id: 1 (number) - An unique identifier of the contact.

  - Headers

        x-auth-token: YOURJWT

* Response: 200 (application/json)

  - Body

          {
            "msg": "Contact removed"
          }
