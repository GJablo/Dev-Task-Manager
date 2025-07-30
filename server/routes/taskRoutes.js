// Task routes
const express = require('express');
const { createTask, getMyTasks, getAllTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createTask);
router.get('/me', protect, getMyTasks);
router.get('/all', protect, authorize(['admin']), getAllTasks);
router.put('/:id', protect, authorize(['admin', 'developer']), updateTask);
router.delete('/:id', protect, authorize(['admin', 'developer']), deleteTask);

module.exports = router;
