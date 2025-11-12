<<<<<<< HEAD
const express = require('express');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express();
app.set('view engine', 'ejs');

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req, res) => {
  console.log('Here');
  res.render('index', { user: 'Sameer!' });
});

=======
const express = require('express')

cost app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  console.log('Here');
  res.render("index",
  {user: "George!",});
});
app.get('/users', (req, res)=> {
  res.send('New User Form');
});


>>>>>>> 82fbb2bcb0222fe42f73b9171cb7ce45b0e21a6b
app.listen(3030);
