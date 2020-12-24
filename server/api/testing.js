const { Router } = require('express');
const Message = require('../models/Message');

const router = Router();

router.get('/show', async (req, res) => {
	const data = await Message.find();

	res.json({ data });
});

router.get('/delete/:id', async (req, res) => {
	await Message.deleteOne({ _id: req.params.id });

	res.status(200).json({ messsage: 'Success!' });
});

router.post('/update/:id', async (req, res) => {
	await Message.updateOne({ _id: req.params.id }, { ...req.body });

	res.status(200).json({ messsage: 'Success!' } );
});

module.exports = router;