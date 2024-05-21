const express = require('express');
const app=express();
const cors = require('cors');
const port = 5000;
const mongoDB = require('./db');
const path=require('path')
app.use(cors());
app.use((req,res,next)=>{
    res.setHeader("Acess-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})
mongoDB();
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use(express.json());
app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/DisplayData'))
app.use('/api',require('./Routes/OrderData'))
app.use(express.static(path.join(__dirname,'./mernapp/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./mernapp/build/index.html"))
})
app.listen(port,(req,res)=>{
    console.log(`server is listening on port : ${port}`)
})
