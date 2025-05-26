const express = require('express');
const app = express();
const PORT = 3000;

const users = require('./data/users');

app.use(express.json());

app.get('/users',(req,res)=>{
    res.json(users);
});

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    res.json(user);
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const user = {
        id: users.length + 1,
        name : req.body.name,
        email : req.body.email,
    }
    users.push(user);
    res.status(201).json(user);
    }
)

app.put('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    user.name = req.body.name;
    user.email = req.body.email;
    res.status(201).json(user);
})

app.delete('/users/:id',(req,res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    if(user.length === 0) return res.status(404).json({message : "User not found"});
    users.splice(user,1);
    res.status(201).json(user);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})