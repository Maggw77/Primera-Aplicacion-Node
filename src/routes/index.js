const express= require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.render('index.html',{title : 'Web Site Adrian'});
  });

  router.get('/contact', (req,res) => {
    res.render('contact.html',{title : 'Contac Page'});
  });
  
  module.exports = router;