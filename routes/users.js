const express = require('express');
const router = express.Router();
const db = require('../core/database');


router.post('/login', async (req, res) => {
	const { password, name } = req.body;
	const user = await db.userModel.findOne({ name });
	if (!user || user.password !== password) {
		return res.json({
			status: 'error',
			currentAuthority: 'guest',
		})
	} else {
		return res.json({
			status: 'ok',
			currentUser: user,
		});
	}
});

router.post('/register', async (req, res) => {
	const { body } = req;
	const { name, email, phone } = body;
	if (await db.userModel.findOne({ name })) { return res.json({ status: 'nameDup' })}
	if (await db.userModel.findOne({ email })) { return res.json({ status: 'emailDup' })}
	if (await db.userModel.findOne({ phone })) { return res.json({ status: 'phoneDup' })}
	await db.userModel({ ...body }).save();
	return res.json({ status: 'ok' });
});

module.exports = router;
