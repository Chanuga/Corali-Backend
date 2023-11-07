import express from 'express';
import { completeTask, deleteTask, getAllTasks, saveTask } from '../controllers/taskController.js'

const router = express.Router();

//add a new task
router.post('/' , saveTask);

//get all tasks
router.get('/' , getAllTasks);

//delete task
router.post('/:id' , deleteTask);

//complete task
router.post('/complete/:id' , completeTask);

export default router;