# Express app template

This is backend node js starter template.

## Step 1

    npm install

## Step 2 (Create .env)

    HOST=Localhost
    PORT=4000(or something) in .env

## Step 3

    npm run start

---

### Code Architecture

```
PROJECT-NAME
├── config
│   └── permission.js
├── controllers
│   ├── controller-1
│   ├──       ။
│   └── controller-N
├── helpers
│   └── constants.js
├── routes
│   ├── api.js (Bundle routes)
│   ├── route-1
│   ├──    ။
│   └── route-N
├── services
│   ├── auth.js
│   ├── + Database access
│   └── + External API
├── app.js
├── package.json
├── README.md
└── .env
```

> #### Need to see all branches for full code architecture

### Used JavaScript Version

    ES6

---

### Definitions

- [ ] **controllers** `Refactor callback functions, define app routes and business logic`

- [ ] **models** `Represent data structure, schema, validation`
- [ ] **helpers** `code and functionality to be shared by different parts of the project, e.g, global constant`
- [ ] **routes** `Define API endpoints for corresponding controller methods and serve like middlewares that access to request & response object`
- [ ] **services** `Auth services like passport strategies and authorisation, database access services and other third-party external api, rendering templates`
- [ ] **config** `Permissions, loggers, etc`

---

### Branches capability

#### master

> Just running app, no api calls.

`Localhost server running on port 4000`

#### local-db

> CRUD api calls using local data including controllers and routes usage.

#### mongo-db

> CRUD api calls using mongo database including controllers and routes usage.

#### jwt-auth

> Protected route using JWT auth

```
GET:      localhost:4000/api/v1/tasks
GET:      localhost:4000/api/v1/tasks/1
POST:     localhost:4000/api/v1/tasks (body - { title, description } )
PUT:      localhost:4000/api/v1/tasks/1 (body - { title, description } )
DELETE:   localhost:4000/api/v1/tasks/1
```
