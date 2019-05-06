var express = require('express');
var app = express();

var pg = require('pg');

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
app.get('/postgres://wmdqrdbyjlqlwb:3354330f5efcfae09de87be86324eb3825df73d44c4d250ce6b2975bd80b4853@ec2-174-129-240-67.compute-1.amazonaws.com:5432/d3j9of6roliub9
',async(req, res)
	 try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM USERS');
      
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
}
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port ' +port);
});
