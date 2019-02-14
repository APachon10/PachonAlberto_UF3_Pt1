var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

var diccionario = [{user:"Alberto",pass:"abc123"} ,
                  {user:"Sean",pass:"abc456"},
                  {user:"Miku",pass:"Miku10"} ];

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('Plantilla_Formulario')
});
app.post('/login', function(req, res) {
  var username = req.body.nombre;
  var password = req.body.pass;
  var i =0;
  for(i=0 ;i<diccionario.length;i++){
    console.log('Usuario '+diccionario[i].user);
    if(username == diccionario[i].user && password == diccionario[i].pass){      
      res.send('Login Correcto ');
      return;
    }
  }
  res.send("Login Incorrecto");
});

app.get('/api/login/:username/:password',function(req,res){
  var i =0;
  for(i=0 ;i<diccionario.length;i++){
    if(req.params.username == diccionario[i].user && req.params.password == diccionario[i].pass){      
      res.send('Bienvenido '+req.params.username);
      return;
    }
  }
  res.send("Login Incorrecto");
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
