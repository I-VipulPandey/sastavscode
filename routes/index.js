var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function (req, res) {

  let items = [];
  fs.readdir('./uploads', { withFileTypes: true }, function (err, data) {

    data.forEach(function (f) {

      items.push({ name: f.name, isFolder: f.isDirectory() })

    })
    res.render('index', { data: items, filename: ""});

  })
});



router.get('/file/:filename', function (req, res) {
  let items = [];
  fs.readdir('./uploads', { withFileTypes: true }, function (err, data) {

    data.forEach(function (f) {

      items.push({ name: f.name, isFolder: f.isDirectory() })

    })

  })

  fs.readFile(`./uploads/${req.params.filename}`, 'utf8', function (err, data) {

    res.render('index', { data: items, filename:req.params.filename, filedata:data });
  })

});



router.get('/filecreate', function (req, res) {

  fs.writeFile(`./uploads/${req.query.filename}`, "", function (err) {

    res.redirect('/');


  })
});

router.get('/foldercreate', function (req, res) {

  fs.mkdir(`./uploads/${req.query.foldername}`, function (err) {

    res.redirect('/');


  })
});

router.get('/delete/:name', function (req, res) {

  fs.unlink(`./uploads/${req.params.name}`, function (err) {

    res.redirect('/');


  })
});

router.post('/save/:filename',function(req,res){

  fs.writeFile(`./uploads/${req.params.filename}`, `${req.body.filedata}`, function(err){
    res.redirect('back');
  })
})



module.exports = router;
