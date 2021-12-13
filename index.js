const { db } = require('./db')

const express = require('express');
const app = express();
db.connect();
// app.use(function (req, res, next) {
// 	next()
// })
app.get('/all', async (req, res) => {
	const json = await db.getAll();
	res.json(json)
});
app.get('/', async (req, res) => {
	const json = await db.getTitles();
	res.json({ 'test': 'aaaa' });
});
app.get('/song/:id', async (req, res) => {
	const { params: { id } } = req
	// Send song if there is one if there is no song, send empty string.
	db.getObjById(id).then(song => res.json(song)).catch(res.json({ title: '' }))
});