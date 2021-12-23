const { db } = require('./db')

const express = require('express');
const cors = require('cors');
const app = express();
// // app.use(function (req, res, next) {
// // 	next()
// // })

app.use(cors())

app.get('/all', async (req, res) => {
	try {
		const data = await db.getAll()
		console.log({ data })
		res.json(data)
	} catch (error) {
		console.log(error);
		res.json("")
	}
});
app.get('/', async (req, res) => {
	try {
		const data = await db.getOverview()
		res.json(data)
	} catch (error) {
		console.log(error);
		res.json("")
	}
});
app.get('/song/:id', async (req, res) => {
	const { params: { id } } = req
	// Send song if there is one if there is no song, send empty string.
	try {
		const data = await db.getObjById(id)
		res.json(data)
	} catch (error) {
		console.log(error);
		res.json("")
	}
})

var port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Example app listening at ${port}`)
})
