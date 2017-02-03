
const express = require('express');
const bodyParser = require('body-parser');

var https = require('https');
var http = require('http');
const fs = require('fs');
const app = express();

var spawn = require('child_process').spawn;

var javaLangSystem = java.import('java.lang.System');

var sudo = require('sudo');
var options = {
    cachePassword: true,
    prompt: 'Password, yo? ',
    spawnOptions: { /* other options for spawn */ }
};
var cmd    = require('child_process').spawn('java', ['Main']);

// var options = {
//   key: fs.readFileSync('./ssl/privkey.pem'),
//   cert: fs.readFileSync('./ssl/fullchain.pem')
// };

  // http.createServer(app).listen(80, function(){
  //   console.log('listening for http on 80'); 
  // }); 
    //UNCOMMENT THIS FOR LOCAL 30000
   app.listen(8000, function(){
     console.log('listening on 3000'); 
   }); 


app.set('view engine', 'pug');
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {


  res.render('index'); 
});


app.get('/submit', function(req, res) {
    lyrics = req.body.lyrics;
    name = req.body.name; 

        var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012";
    res.redirect('/');

});

app.get('/jaizz', function(req, res) {
    res.render('jaizz');


});

app.get('/songs', function(req, res) {
      var daata = [];
    fs.readdir('./views/audio/', function(err, data){

    })
    // var compile = spawn('javac', ['Boop.java']);
    // var dootdoot = spawn('java', ['Boop']);

    // res.render('songs', { pdfLink: 'test.pdf', audioLink: 'somosa.wav'})
});
