const TaskModel = require('../model/TaskModel');

class TaskController {
    async create(req, res) {

        try {
            const task = new TaskModel(req.body);
            await task.save().then(() => {
                return res.send().status(200);
            })
        } catch (error) {
            return res.send().status(500);
        }
    }
}

module.exports = new TaskController();