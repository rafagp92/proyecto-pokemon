const express = require('express');
const router = express.Router();
const Task = require('../model/task2');
const Task1 = require('../model/task3');

router.get('/', async (req, res) => {
  res.render('index');
});

router.get('/crud', async (req, res) => {
  const pokemon = await Task1.find();
  res.render('crud', {
    pokemon
  });
});

router.get('/graficaN', async (req, res) => {
  const tasks = await Task.aggregate([{ $group: { _id: {encuentros: "$numEncuentros" },Cantidad: {$sum: 1} }}]);
  console.log(tasks);
	res.render('graficaNotas', {
		tasks
	});
});

router.post('/add', async (req, res, next) => {
  const task = new Task1(req.body);
  await task.save();
  res.redirect('crud');
});



router.get('/edit/:id', async (req, res, next) => {
  const task = await Task1.findById(req.params.id);
  console.log(task)
  res.render('edit', { task });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task1.update({_id: id}, req.body);
  res.redirect('/crud');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task1.remove({_id: id});
  res.redirect('/crud');
});


module.exports = router;
