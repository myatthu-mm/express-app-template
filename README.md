# Express app template
This is backend node js starter template.


## Step 1
    npm install
        
## Step 2 (Create .env)
    HOST=Localhost
    PORT=4000(or something) in .env
    
## Step 3
    npm run start

### Code Architecture 
```
PROJECT-NAME
├── config
│   ├── permission.js
├── controllers
│   ├── controller-1
│   ├──       ။
│   ├── controller-N
├── helpers
│   ├── constants.js
├── routes
│   ├── api.js (Bundle routes)
│   ├── route-1
│   ├──    ။
│   ├── route-N
├── services
│   ├── auth.js
│   ├── + Database access
│   ├── + External API
├── app.js
├── package.json
├── README.md
├── .env
```

> #### Need to see all branches for full code architecture

### Used JavaScript Version
    ES6

### Definitions
> **controllers** `Refactor callback functions, define app routes and business logic`

> **models** `Represent data structure, validation`

> **helpers** `code and functionality to be shared by different parts of the project, e.g, global constant`

> **routes** `Define API endpoints for corresponding controller methods and serve like middlewares that access to request & response object`

> **services** `Auth services like passport strategies and authorisation, database access services and other third-party external api, rendering templates`

> **config** `Permissions, loggers, etc`
