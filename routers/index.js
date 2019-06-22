var express = require('express');
var router = express.Router();
var fs = require('fs')

router.get("/",function (req,res) {
    console.log(fs);
   
    res.writeHead('200',{'content-type' : 'text/html'});
   
    fs.readFile('./public/vidu.html','utf8',function(err, data) {
    if (err) throw err;
   
    res.write(data);
  
    res.end();
    
 })
    
})
router.get("/write",function (req,res) {
    

    var content = 'Nội dung';
   
    fs.writeFile('./public/file.txt',content,'utf8',function (err) {
      
        if(err)
            throw err;
        else 
            console.log('Ghi file thanh cong!');
    })
})

module.exports = router;