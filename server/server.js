const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api/send', require('./api/send'));
app.use('/api/testing', require('./api/testing'));

async function startServer() {
	await mongoose.connect('mongodb+srv://user:pass123@cluster0.3b9il.mongodb.net/<dbname>?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

	app.listen(5000, () => {
		console.log('Server has been started at port 5000...');
	});
}

startServer();