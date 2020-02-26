// import Task model
import Task from '../models/taskModel';

class TasksController {
  getAllTasks(req, res) {
    Task.find((err, tasks) => {
      if (err) {
        res.json({
          status: 'error',
          message: err
        })
      }
      return res.status(200).send({
        success: 'true',
        message: 'tasks retrieved successfully',
        tasks: tasks
      });
    })
  }

  getTaskByID(req, res) {

    Task.findById(req.params.id).then((task) => {
      return res.status(200).send({
        success: 'true',
        message: 'task retrieved successfully',
        task
      });
    }).catch(err => {
      return res.status(404).send({
        success: 'false',
        message: 'task does not exist',
        detail: err
      });
    })
  }

  createTask(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required'
      });
    }
    let task = new Task()
    task.title = req.body.title
    task.description = req.body.description
    // save to db
    task.save(err => {
      if (err)
        res.json(err)

      return res.status(201).send({
        success: 'true',
        message: 'task added successfully',
        task
      });
    })
  }

  updateTask(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required'
      });
    }

    Task.findByIdAndUpdate(req.params.id, { $set: { title: req.body.title, description: req.body.description } }, { new: true })
      .then((result) => {
        if (result) {
          return res.status(201).send({
            success: 'true',
            message: 'task updated successfully',
            result
          });
        } else {
          reject({ success: false, data: "no such user exist" });
        }
      }).catch((err) => {
        reject(err)
      })
  }

  deleteTask(req, res) {
    Task.deleteOne({
      _id: req.params.id
    }, (err, task) => {
      if (err)
        res.json(err)
      return res.status(200).send({
        success: 'true',
        message: 'Task deleted successfuly'
      });
    })
  }
}

const taskController = new TasksController();
export default taskController;
