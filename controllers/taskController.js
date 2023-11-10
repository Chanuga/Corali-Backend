import { TaskModel } from '../models/taskModel.js'

// add a new task
export const saveTask = async (req, res) => {
    const { title, is_complete } = req.body
    try {
        const post = await TaskModel.create({title, is_delete: false, is_complete });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find({is_delete: false}).sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// delete a task
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await TaskModel.findByIdAndUpdate({_id: id}, {is_delete : true});
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// complte a task
export const completeTask = async (req, res) => {
    const { id } = req.params;
    try {
        const tasktochangecompletestate = await TaskModel.findById({_id: id});
        const task = await TaskModel.findByIdAndUpdate({_id: id}, {is_complete : !tasktochangecompletestate.is_complete});
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

