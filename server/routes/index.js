var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
  next();
});
require('../app/doku').init(router);
module.exports = router;
