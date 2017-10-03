var path = require("path");
var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + "/"));
//app.use(express.static(__dirname + "/"));
//app.use(connect.bodyDecoder());

app.get('/', function (req, res) {
  res.render('home');
});
app.post('/', function (req, res) {
  res.render('home');
});

app.get('/t2', function (req, res) {

  res.render('t2');

});

app.get('/t4', function (req, res) {
	var retorno = "";

	if(req.param("isGet") != undefined){
		retorno = req.param("isGet");
	}
  res.render('t4', {tipo: "GET", valor: retorno});

});
app.post('/t4', function (req, res) {
  var retorno = "";
  console.log(retorno+" "+ req.params.isPost);
if(req.param("isPost") != undefined)
		retorno = req.param("isPost");
  res.render('t4', {tipo: "POST", valor: retorno});
});




app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});