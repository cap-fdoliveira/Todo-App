const TaskModel = require('../model/TaskModel');
const { 
    startOfDay,
    endOfDay,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear
} = require('date-fns')

const current = new Date();

class TaskController {
    async create(req, res) {

        const task = new TaskModel(req.body);
        await task.save().then(data => {
            return res.status(201).json(data);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }

    async update(req, res) {

        await TaskModel.findByIdAndUpdate(
            { '_id': req.params.id }, req.body, { new: true }
        ).then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }

    async delete(req, res) {

        await TaskModel.deleteOne(
            { '_id': req.params.id }
        ).then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }

    async all(req, res) {

        await TaskModel.find(
            { macaddress: { '$in': req.params.macaddress } }
        ).sort('date')
            .then(data => {
                return res.status(200).json(data);
            })
            .catch(err => {
                return res.status(500).json(err);
            });
    }

    async fetchTaskById(req, res) {

        await TaskModel.findById(req.params.id)
            .then(data => {
                if (data) {
                    return res.status(200).json(data);
                }
                return res.status(400).json({ err: 'Task not found' })
            })
            .catch(err => {
                return res.status(500).json(err);
            });
    }

    async updateTaskStatus(req, res) {

        await TaskModel.findOneAndUpdate(
            { '_id': req.params.id },
            { 'done': req.params.done },
            { new: true }
        ).then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }

    async taskLate(req, res) {

        await TaskModel.find({
            'macaddress': { '$in': req.params.macaddress },
            'date': { '$lt': current },
            'done': {'$eq': false}
        })
         .sort('date')
         .then(data => {
             return res.status(200).json(data);
         })
         .catch(err => {
             return res.status(500).json(err);
         });
    }

    async todayTask(req, res) {
        await TaskModel.find({
            'macaddress': { '$in': req.params.macaddress },
            'date': { '$gte': startOfDay(current), '$lt': endOfDay(current) }
        })
        .sort('date')
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }

    async weekTask(req, res) {
        await TaskModel.find({
            'macaddress': { '$in': req.params.macaddress },
            'date': { '$gte': startOfWeek(current), '$lt': endOfWeek(current) }
        })
        .sort('date')
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }

    async monthTask(req, res) {
        await TaskModel.find({
            'macaddress': { '$in': req.params.macaddress },
            'date': { '$gte': startOfMonth(current), '$lt': endOfMonth(current) }
        })
        .sort('date')
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }

    async yearTask(req, res) {
        await TaskModel.find({
            'macaddress': { '$in': req.params.macaddress },
            'date': { '$gte': startOfYear(current), '$lt': endOfYear(current) }
        })
        .sort('date')
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    }
}

module.exports = new TaskController();