// const { db } = require('./db')

const express = require('express');
const app = express();
// // app.use(function (req, res, next) {
// // 	next()
// // })

// app.get('/all', async (req, res) => {
// 	db.getAll().then(json => res.json(json)).catch(err => {
// 		console.error(err)
// 		res.json("")
// 	});
// });
app.get('/', async (req, res) => {
	// db.getTitles().then(json => res.json(json)).catch(err => {
	// 	console.error(err)
	// 	res.json("")
	// });
	res.json("aaaaa")
});
// app.get('/song/:id', async (req, res) => {
// 	const { params: { id } } = req
// 	// Send song if there is one if there is no song, send empty string.
// 	// db.getObjById(id).then(song => res.json(song)).catch(err => {
// 	// 	res.json({ title: '' }
// 	// }))
// 	db.getObjById().then(json => res.json(json)).catch(err => {
// 		console.error(err)
// 		res.json("")
// 	});
// })

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Example app listening at ${port}`)
})