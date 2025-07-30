// Task Controller for handling task-related operations
const Task = require('../models/Task'); // Task model

// Post a new task /api/tasks
exports.createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, ownership: req.user.id });
  res.status(201).json(task);
};

// Get single(own) tasks /api/tasks/me
exports.getMyTasks = async (req, res) => {
  const tasks = await Task.find({ ownership: req.user.id });
  res.status(200).json(tasks);
};

// Get all tasks /api/tasks/all
exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find().populate('ownership', 'email');
  res.status(200).json(tasks);
};
