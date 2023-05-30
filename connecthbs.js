const express = require('express');
const app = express();
const port = 3000;
require('./db/db');
const path = require('path');


const template_Path = path.join(__dirname, '../template/views');

app.set('view engine','hbs');
app.set('views',template_Path)

// app.get('/',(req,res)=>{
//     res.send("hello world...");
// });

app.get('/',(req,res) =>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`listing to the port ${port}`);
});

console.log("working....");