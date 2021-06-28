const express = require('express');
const router = express.Router();
const db = require('../core/database');

router.post('/fetch', async function (req, res, next) {
  const devices = await db.deviceModel.find({}, { _id: 0, __v: 0 })
  let onlineNum = require('../bin/www');
  return res.json({
    online: onlineNum.onlineNum,
    data: devices,
  })
});

router.post('/add', async function (req, res, next) {
  const { deviceName, deviceType, userName } = req.body;
  const clientId = "device" + req.body.clientId;
  // update user subscribe lists
  await db.userModel.findOneAndUpdate(
    { name: userName },
    {
      $push: { devices: [clientId] }
    }
  )

  // add to devices schema if it's a new devie
  const device = await db.deviceModel.findOne({ clientId });
  if (!device) {
    if (deviceName) await db.deviceModel({ clientId, deviceType, deviceName }).save();
    else await db.deviceModel({ clientId, deviceType }).save();
  }


  return res.json({
    success: true
  })
});

router.post('/update', async function (req, res, next) {
  const { clientId, deviceName, deviceType } = req.body

  if (deviceName) {
    await db.deviceModel.findOneAndUpdate(
      { clientId: clientId },
      { $set: { deviceName: deviceName } }
    )
  }
  device = await db.deviceModel.findOne({ clientId });
  if (deviceType !== undefined) {
    await db.deviceModel.findOneAndUpdate(
      { clientId },
      { $set: { deviceType } }
    )
  }

  return res.json({
    success: true
  })
});

router.post('/remove', async function (req, res, next) {
  const { clientId, userName } = req.body

  const user = await db.userModel.findOne({ name: userName });
  const index = user.devices.indexOf(clientId)
  if (index !== -1) user.devices.splice(index, 1)

  await db.userModel.findOneAndUpdate(
    { name: userName },
    { $set: { devices: user.devices } }
  )

  return res.json({
    success: true
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
