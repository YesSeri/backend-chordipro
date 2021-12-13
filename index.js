const { db } = require('./db')

const express = require('express');
const app = express();
// var cors = require('cors');

// app.use(
// 	cors({
// 		credentials: true,
// 		origin: true
// 	})
// );
// app.options('*', cors());
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
	res.json(json)
});
app.get('/song/:id', async (req, res) => {
	const { params: { id } } = req
	// Send song if there is one if there is no song, send empty string.
	db.getObjById(id).then(song => res.json(song)).catch(res.json({ title: '' }))
});