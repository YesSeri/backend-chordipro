
const { MongoClient } = require('mongodb');
// import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://chordiproUsers:P4K6bi6c5NMPC7dKgbrZ4AstmSwQMwX@chordipro.0gczx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// This gets all from my server and returns it.

async function connect() {
	return new Promise((res, rej) => {
		client.connect(err => {
			if (err) {
				rej(err)
			} else {
				res()
			}
		})
	})
}
async function getAll() {
	return new Promise((res, rej) => {
		client.connect(err => {
			if (err) {
				rej(err)
			} else {
				const collection = client.db("chordipro").collection("songs");
				collection.find({}).toArray(function (err, result) {
					if (err) {
						rej(err)
					} else {
						res(result)
					}
				})
			}
		});
	})
}
function close() {
	client.close();
}

module.exports = { db: { close, connect, getAll } }