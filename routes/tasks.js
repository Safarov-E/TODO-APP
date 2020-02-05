var express = require('express');
var router = express.Router();

let tasks = [{
		description: 'Описание задачи',
		executor: 'Исполнитель',
		id: 1,
		priority: 10
	},
	{
		description: 'Описание задачи',
		executor: 'Исполнитель',
		id: 2,
		priority: 5
	},
	{
		description: 'Описание задачи',
		executor: 'Исполнитель',
		id: 3,
		priority: 0
	},
];
router.get('/', function (req, res, next) {
	res.json(tasks);
});

let getId = () => {
	return tasks.length + 1;;
} 
router.post('/', function (req, res, next) {
	console.log(req.body);
	if (typeof req.body === 'object') { 
		let task = req.body;
		task.id = getId();
		tasks.push(task);
		res.json({
			result: 1
		});
	} else {
		res.json({
			result: 0
		});
	}
});
handleDelete = (id) => {
	const data = tasks.filter(item => { 
		return item.id !== id; 
	})
	tasks = data;
}
router.post('/delete', function (req, res, next) {
	if (typeof req.body === 'object' && req.body.id) {
		handleDelete(req.body.id);
		res.json({
			result: 1
		});
	} else {
		res.json({
			result: 0
		});
	}
});
handleRaise = (id) => {
    const data = tasks.map(item => {
      if (item.id === id) {
        item.priority += 1
      }
      return item
    })
    tasks = data;
}
router.post('/raise', function (req, res, next) {
	if (typeof req.body === 'object' && req.body.id) {
		handleRaise(req.body.id);
		res.json({
			result: 1
		});
	} else {
		res.json({
			result: 0
		});
	}
});
handleLower = (id) => {
    const data = tasks.map(item => {
      if (item.id === id) {
        item.priority -= 1
      }
      return item
    })
    tasks = data;
}
router.post('/lower', function (req, res, next) {
	if (typeof req.body === 'object' && req.body.id) {
		handleLower(req.body.id);
		res.json({
			result: 1
		});
	} else {
		res.json({
			result: 0
		});
	}
});
module.exports = router;