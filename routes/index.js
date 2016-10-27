var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/pdf', function(req, res, next) {
  console.log(req.body);
  console.log(req.files);
  var pdfFile = req.files.file;
  var pdfFileName = req.files.file.name;
  var date = Date.now();
  var newFilename = date + '-' + pdfFileName;
  var filePath = __dirname + '/../public/pdfs/' + newFilename;
  pdfFile.mv(filePath, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('File uploaded');
    }
  })
});

module.exports = router;
