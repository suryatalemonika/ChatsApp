const express = require('express');
const app = express();
const { userRegister,Login } = require('./login')
let port = 500+Math.floor(Math.random() * 10);

app.get('',(req,res)=>{
    console.log(`${new Date().toJSON()} - index - app - get method`);
    res.send('ok');
})
app.post('/login',(req,res)=>{
    console.log('user login');
    res.send('user logged in');
})

app.post('/register/:no',async (req,res)=>{
    console.log('user registeration');
    console.log(req.params)
    const user = await userRegister(req.params);
    res.send(user);
})
app.listen(port, ()=>{
    console.log(`${new Date().toJSON()} - index - app - server running on port ${port}`);
})