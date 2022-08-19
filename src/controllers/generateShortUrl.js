const express = require('express');
const router = express.Router();
const ShortUrl = require('../models/ShortUrl')

router.get('/data',  async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('data.ejs', { shortUrls: shortUrls })
  })
  
router.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })
  
    res.redirect('/data');
  })
  
router.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
  
    shortUrl.clicks++
    shortUrl.save()
  
    res.redirect(shortUrl.full)
  })

module.exports = router  