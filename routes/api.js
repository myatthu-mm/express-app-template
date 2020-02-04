import express from 'express';
/** import routes */
import taskRouter from '../routes/tasks';
const app = express()

/** use router */
app.use('/tasks/', taskRouter)

export default app;