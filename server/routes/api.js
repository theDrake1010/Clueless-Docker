// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://localhost:27017/mean-docker';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const userSchema = new mongoose.Schema({
  task: String,
  description: String
});

// create mongoose model
const Todo = mongoose.model('Todo', userSchema);

/* GET api listing. */
router.get('/', (req, res) => {
		res.send('api works');
});

/* GET all tasks. */
router.get('/tasks', (req, res) => {
	Todo.find({}, (err, tasks) => {
		if (err) res.status(500).send(error)

		res.status(200).json(tasks);
	});
});

/* GET one tasks. */
router.get('/tasks/:id', (req, res) => {
	Todo.findById(req.params.id, (err, tasks) => {
		if (err) res.status(500).send(error)

		res.status(200).json(tasks);
	});
});

/* Create a user. */
router.post('/tasks', (req, res) => {
	let todo = new Todo({
		task: req.body.task,
		description: req.body.description
	});

	todo.save(error => {
		if (error) res.status(500).send(error);

		res.status(201).json({
			message: 'Task created successfully'
		});
	});
});

module.exports = router;