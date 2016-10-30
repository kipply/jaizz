
const express = require('express');
const bodyParser = require('body-parser');

var https = require('https');
var http = require('http');
const fs = require('fs');
const app = express();

var java = require('java');
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
   app.listen(80, function(){
     console.log('listening on 3000'); 
   }); 


app.set('view engine', 'pug');
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {


    // var childee = require('child_process').spawn('cd', ['views/audio']);
    var childee = require('child_process').spawn('./run.sh');

    var childee = require('child_process').spawn('mv', ['a.pdf', 'views/audio/a.pdf']);
  res.render('index'); 
});


app.get('/submit', function(req, res) {
    lyrics = req.body.lyrics;
    name = req.body.name; 

        var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 9; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    var path = " views/audio/" + text + ".txt";
    var items = ["G", "A", "GF", "AF"];
    var instruments = ["clarinet", "trumpet", "piano", "alto_sax"];
    var pitch = items[Math.floor(Math.random()*items.length)];
    var instrument = items[Math.floor(Math.random()*items.length)];
    var child = require('child_process').spawn(
    'java', ['-jar', 'Jaizz.jar', pitch, instrument, 'short', 'a']
    );
    var childee = require('child_process').spawn('./run.sh');

    var childee = require('child_process').spawn('mv', ['a.pdf', 'views/audio/a.pdf']);
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
