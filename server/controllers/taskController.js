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

// Update a task /api/tasks/:id
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a task /api/tasks/:id
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
