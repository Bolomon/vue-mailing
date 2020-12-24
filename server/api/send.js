const { Router } = require('express');
const Message = require('../models/Message');

const router = Router();

router.post('/send', (req, res) => {
	const mess = new Message({ ...req.body });
	mess.save();
});

module.exports = router;