import express from "express";
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors"
import taskRoutes from './routes/task.js'

dotenv.config();

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json()) // to access to request body of requests

// request log
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/tasks', taskRoutes)

// Catch-all route for unmatched routes
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to the db & listning on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })