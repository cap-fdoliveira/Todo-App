const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');

router.post('/', TaskController.create);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);
router.get('/filter/all/:macaddress', TaskController.all);
router.get('/:id', TaskController.fetchTaskById);
router.put('/:id/:done', TaskController.updateTaskStatus);
router.get('/filter/late/:macaddress', TaskController.taskLate);
router.get('/filter/today/:macaddress', TaskController.todayTask);
router.get('/filter/week/:macaddress', TaskController.weekTask);
router.get('/filter/month/:macaddress', TaskController.monthTask);
router.get('/filter/year/:macaddress', TaskController.yearTask);

module.exports = router;