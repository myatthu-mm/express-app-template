import tasks from '../localdb/db';

class TasksController {
    getAllTasks(req, res) {
        return res.status(200).send({
            success: 'true',
            message: 'tasks retrieved successfully',
            tasks: tasks,
        });
    }

    getTask(req, res) {
        const id = parseInt(req.params.id, 10);
        tasks.map((task) => {
            if (task.id === id) {
                return res.status(200).send({
                    success: 'true',
                    message: 'task retrieved successfully',
                    task,
                });
            }
        });
        return res.status(404).send({
            success: 'false',
            message: 'task does not exist',
        });
    }

    createTask(req, res) {
        if (!req.body.title) {
            return res.status(400).send({
                success: 'false',
                message: 'title is required',
            });
        } else if (!req.body.description) {
            return res.status(400).send({
                success: 'false',
                message: 'description is required',
            });
        }
        const task = {
            id: tasks.length + 1,
            title: req.body.title,
            description: req.body.description,
        };
        tasks.push(task);
        return res.status(201).send({
            success: 'true',
            message: 'task added successfully',
            task,
        });
    }

    updateTask(req, res) {
        const id = parseInt(req.params.id, 10);
        let taskFound;
        let itemIndex;
        tasks.map((task, index) => {
            if (task.id === id) {
                taskFound = task;
                itemIndex = index;
            }
        });

        if (!taskFound) {
            return res.status(404).send({
                success: 'false',
                message: 'task not found',
            });
        }

        if (!req.body.title) {
            return res.status(400).send({
                success: 'false',
                message: 'title is required',
            });
        } else if (!req.body.description) {
            return res.status(400).send({
                success: 'false',
                message: 'description is required',
            });
        }

        const newTask = {
            id: taskFound.id,
            title: req.body.title || taskFound.title,
            description: req.body.description || taskFound.description,
        };

        tasks.splice(itemIndex, 1, newTask);

        return res.status(201).send({
            success: 'true',
            message: 'task added successfully',
            newTask,
        });
    }

    deleteTask(req, res) {
        const id = parseInt(req.params.id, 10);
        let taskFound;
        let itemIndex;
        tasks.map((task, index) => {
            if (task.id === id) {
                taskFound = task;
                itemIndex = index;
            }
        });

        if (!taskFound) {
            return res.status(404).send({
                success: 'false',
                message: 'task not found',
            });
        }
        tasks.splice(itemIndex, 1);

        return res.status(200).send({
            success: 'true',
            message: 'Task deleted successfuly',
        });
    }
}

const taskController = new TasksController();
export default taskController;