import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routes/api';
import dotenv from 'dotenv'
dotenv.config()
// Set up the express app
const app = express();


// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// attach router
app.use('/api/v1/', apiRouter)


app.listen(process.env.PORT, () => {
    console.log(`${process.env.HOST} server running on port ${process.env.PORT}`)
});