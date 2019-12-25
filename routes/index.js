var express = require('express');
const shortid = require("shortid");
var router = express.Router();

let shortUrls = [];

/* GET users listing. */
router.get('/api/item/:shortcode', function(req, res, next) {
  const code = req.params.code;
  const item = shortUrls.find(i => i.urlCode === code);
  return res.status(200).json(item || {});

});

router.post('/api/item', function(req, res, next) {
  const {originalUrl} = req.body;
  const urlCode = shortid.generate();
  const item = {
    originalUrl,
    shortUrl: `http://localhost/api/item/${urlCode}`,
    urlCode
  };

  shortUrls.push(item);

  res.status(200).json(item);
});

router.get('/:shortcode', function(req, res, next) {
  const code = req.params.code;
  const item = shortUrls.find(i => i.urlCode === code);
  return res.redirect(item.originalUrl);

});

module.exports = router;
