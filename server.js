
const express = require('express');
const bodyParser = require('body-parser');

var https = require('https');
var http = require('http');
const fs = require('fs');
const app = express();

var spawn = require('child_process').spawn;

   app.listen(80, function(){
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
