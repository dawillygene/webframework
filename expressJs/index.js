const express = require('express');
const app = express();
const port = 3000;

let users = require('./data/user.js');

app.use(express.json())

app.get('/users',(req,res) =>{
  res.json(users);
});

app.get('/users/:id',(req,res)=>{

const user = users.find(u => u.id === parseInt(req.params.id));
user ? res.json(user) : res.status(404).send('User not found');
});



app.post('/users',(req,res)=>{
  const newUser ={
    id: users.length+1,
    name: req.body.name,
    email: req.body.email
  }
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id',(req,res)=>{

const user = users.find(u => u.id === parseInt(req.params.id));
if(user){
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  res.json(user);
} else {
  res.status(404).send('User not found');
}
});


app.delete('/users/:id',(req,res) => {
users = users.filter(u => u.id !== parseInt(req.params.id));
res.status(204).send();
});





app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
