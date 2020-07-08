const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');

router.post('/', TaskController.create);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);
router.get('/all', TaskController.all);
router.get('/:id', TaskController.fetchTaskById);

module.exports = router;