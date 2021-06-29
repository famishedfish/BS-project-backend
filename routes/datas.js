const express = require('express');
const router = express.Router();
const db = require('../core/database');

router.post('/fetch', async function (req, res, next) {
  const records = await db.dataModel.find({}, { _id: 0, __v: 0 })
  return res.json({
    data: records,
  })
});

module.exports = router;
