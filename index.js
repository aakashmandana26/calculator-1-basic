const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/',(req,res)=>{
    var sum = Number(req.body.first) + Number(req.body.second);
    res.send("The answer is "+sum);
})

// app.get('/calculate', (req,res)=>{
//     res.sendFile("./index.html");
// })

app.listen(3000, ()=>{console.log("Listening on port http://localhost:3000")});