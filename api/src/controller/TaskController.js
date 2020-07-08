const TaskModel = require('../model/TaskModel');

class TaskController {
    async create(req, res) {
        try {
            const task = new TaskModel(req.body);
            await task.save().then(data => {
                return res.status(201).json(data);
            })
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    async update(req, res) {
        try {
            await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
            .then(data => {
                return res.status(200).json(data);
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async delete(req, res) {
        try {
            await TaskModel.deleteOne({'_id': req.params.id})
            .then(data => {
                return res.status(200).json(data);
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async all(req, res) {
        try {
            const mac = req.body;
            await TaskModel.find({ macaddress: {'$in': mac.macaddress} })
            .sort('date')
            .then(data => {
                return res.status(200).json(data);
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async fetchTaskById(req, res) {
        try {
            await TaskModel.findById(req.params.id)
            .then(data => {
                if (data) {
                    return res.status(200).json(data);
                }
                return res.status(400).json({err: 'Task not found'})
            });
        } catch (err) {
            return res.status(500).json(err);
        }

    }
}

module.exports = new TaskController();