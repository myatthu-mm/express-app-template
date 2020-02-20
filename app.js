import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routes/api';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
// Set up the express app
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// mongoose database connection
mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

if (!db) {
    console.log('Error connecting database');
} else {
    console.log('Mongoose DB connected!');
}

// attach router
app.use('/api/v1/', apiRouter)


app.listen(process.env.PORT, () => {
    console.log(`${process.env.HOST} server running on port ${process.env.PORT}`)
});