const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');

router.post('/', TaskController.create);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);
router.get('/all', TaskController.all);
router.get('/:id', TaskController.fetchTaskById);
router.put('/:id/:done', TaskController.updateTaskStatus);
router.get('/filter/late', TaskController.taskLate);
router.get('/filter/today', TaskController.todayTask);
router.get('/filter/week', TaskController.weekTask);
router.get('/filter/month', TaskController.monthTask);
router.get('/filter/year', TaskController.yearTask);

module.exports = router;