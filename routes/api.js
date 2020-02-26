import express from 'express';
import { TASK_ENDPOINT_ROUTE } from '../helpers/constants';
import { USER_ENDPOINT_ROUTE } from '../helpers/constants';

/** import routes */
import taskRouter from '../routes/tasks';
import userRouter from '../routes/users';
const app = express()

/** use router */
app.use(`/${TASK_ENDPOINT_ROUTE}/`, taskRouter)
app.use(`/${USER_ENDPOINT_ROUTE}/`, userRouter)

export default app;