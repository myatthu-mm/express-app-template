# Express app template
This is backend node js starter template.


## Step 1
    npm install
    
## Step 2
    npm run start

### Code Architecture 
```
PROJECT-NAME
├── config
│   ├── permission.js
├── controllers (Refactor callbacks)
│   ├── controller-1
│   ├──       |
│   ├── controller-N
├── helpers
│   ├── constants.js
├── routes
│   ├── api.js (Bundle routes)
│   ├── route-1
│   ├──    |
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

> Need to see all branches for full code architecture
