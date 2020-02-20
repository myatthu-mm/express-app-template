import express from 'express';
import { TASK_ENDPOINT_ROUTE } from '../helpers/constants';
/** import routes */
import taskRouter from '../routes/tasks';
const app = express()

/** use router */
app.use(`/${TASK_ENDPOINT_ROUTE}/`, taskRouter)

export default app;