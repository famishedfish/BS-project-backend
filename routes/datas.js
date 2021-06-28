const express = require('express');
const router = express.Router();
const db = require('../core/database');

router.post('/fetch', async function (req, res, next) {
  const records = await db.dataModel.find({}, { _id: 0, __v: 0 })
  return res.json({
    data: records,
  })
});

router.post('/insert', async function (req, res, next) {
  const { title, tag, date, image, article_content } = req.body;
  const doc = await db.articleModel({ title, tag, date, image, article_content, likes: 0 }).save();
  if (doc) {
    console.log(doc)
    return res.json({
      code: 200,
      msg: "success",
    })
  }
});

module.exports = router;
