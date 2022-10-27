var express = require('express');
var router = express.Router();
var random1 = Math.floor(Math.random()*100)
var random2= Math.random()
var val1="Math.log2() applied to "+ random1 + " is "+ Math.log2(random1,random1)
var val2="Math.cosh()  applied to "+ random2 + " is "+ Math.cosh(random2)
var val3= "Math.floor() applied to "+ random1 + " is "+ Math.floor(random1);
console.log(val1)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Siva Ram Sai Bonus',value1: val1, value2:val2, value3:val3 });
});



module.exports = router;
