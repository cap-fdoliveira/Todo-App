const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');

router.post('/', TaskController.create);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);
router.get('/', TaskController.get);

module.exports = router;