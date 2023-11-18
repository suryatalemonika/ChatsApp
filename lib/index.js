const express = require('express');
const app = express();
let port = 500+Math.floor(Math.random() * 10);

app.get('',(req,res)=>{
    console.log(`${new Date().toJSON()} - index - app - get method`);
    res.send('ok');
})
app.post('/login',(req,res)=>{
    console.log('user login');
    res.send('user logged in');
})
app.listen(port, ()=>{
    console.log(`${new Date().toJSON()} - index - app - server running on port ${port}`);
})