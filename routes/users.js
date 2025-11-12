const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users Page');
});

//router.post('/:id',(req, res) =>(
//  res.send('Getting User data: ${req.params.id'};
// });

router.route("/:id").get(req, res) =>{ // work from class on 11/12/25
  res.send('Getting User data: ${req.params.id'};
}).delete((req, res) =>{
  res.send('Deleting user with id: ${req.params.id'};
}).put((req, res) =>{
  res.send('Updating user with id: ${req.params.id'};
});

router.param("id", (req, res, next, id) =>{
  console.log('Accessing user #$(id)');
  next();
});
  

router.get('/new', (req, res) => {
  res.send('Create a new user');
});


module.exports = router;
