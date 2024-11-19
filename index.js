var express = require('express');  
const bodyParser = require('body-parser');
var fs= require("fs")

var app = express();  
app.use(express.static('static'));  
  

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" ); 
})  

app.post('/donate', function (req, res) {  
    console.log(req.body);
    fs.appendFile('data.txt', JSON.stringify(req.body)+"\n", function (err) {
  
        res.sendFile( __dirname + "/static/" + "submit.html" ); 
    });
    
})

var server = app.listen(8000, function () {  
  

  console.log("server started");  
  
}) 