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
app.get('/', async (req, res) => {
	const json = await db.getAll();
	res.json(json)
});

const port = process.env.PORT || 3000
app.listen(port, function () {
	console.log('Server running on: ' + port);
});
