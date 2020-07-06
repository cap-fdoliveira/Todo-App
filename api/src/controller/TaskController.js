const TaskModel = require('../model/TaskModel');

class TaskController {
    async create(req, res) {
        try {
            const task = new TaskModel(req.body);
            await task.save().then(data => {
                return res.status(200).json(data);
            })
        } catch (err) {
            return res.status(400).json(err.errors.title.properties.message);
        }
    }
}

module.exports = new TaskController();