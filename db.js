
const { MongoClient, ObjectId } = require('mongodb');
// import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://chordiproUsers:P4K6bi6c5NMPC7dKgbrZ4AstmSwQMwX@chordipro.0gczx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// This gets all from my server and returns it.

async function getAll() {
	return new Promise((res, rej) => {
		client.connect(err => {
			if (err) {
				throw new Error('Something went wrong in db connection.', err)
			}
			const collection = client.db("chordipro").collection("songs");
			collection.find({}).toArray(function (err, result) {
				close()
				if (err) {
					throw new Error('Something went wrong in getAll', err)
				} else {
					res(result)
				}
			})
		})
	})
}
async function getOverview() {
	return new Promise((res, rej) => {
		client.connect(err => {
			if (err) {
				throw new Error('Something went wrong in db connection.', err)
			}
			const collection = client.db("chordipro").collection("songs");
			collection.find({}, { projection: { title: 1, artist: 1 } }).toArray(function (err, result) {
				close()
				if (err) {
					throw new Error('Something went wrong in getTitles', err)
				} else {
					res(result)
				}
			})
		})
	})
}
async function getObjById(id) {
	return new Promise((res, rej) => {
		client.connect(err => {
			if (err) {
				throw new Error('Something went wrong in db connection.', err)
			}
			const collection = client.db("chordipro").collection("songs");
			collection.findOne({ _id: ObjectId(id) }, function (err, result) {
				close()
				if (err) {
					throw new Error('Something went wrong in getObjById', err)
				} else {
					res(result)
				}
			})
		})
	})
}
function close() {
	client.close();
}

module.exports = { db: { close, getAll, getOverview, getObjById } }