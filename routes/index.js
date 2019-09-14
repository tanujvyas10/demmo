var express = require('express');
var router = express.Router();


var passport=require("passport")
var bcrypt = require('bcryptjs');
var upload=require("../handlers/multer")
var LocalStrategy =require("passport-local")
var fileupload=require("express-fileupload")
router.use(fileupload({
  useTemFiles:true
}))

var cloudinary=require("cloudinary").v2

cloudinary.config({
  cloud_name:'aflatoon1298',
  api_key:'966189315781197',
  api_secret:'pcziUdtcd0MIrKJVt6ofD_Nfjao'
})

router.get("/",function(req,res,next){
  //console.log("might be a fali")
  res.render("index")
})


 
// router.post("/posting",upload.single('avatar'),(req,res)=>{
//   //const files=req.body.files
//   console.log("reached")
//   //res.send({ok:true})
//   res.send(req.body)
// })

router.post('/posting', upload.single('image'), async (req, res) => {
//   const result = await cloudinary.uploader.upload(req.file.path)
//   const blog = new Blog()
//   blog.title = req.body.title
//   blog.imageUrl = result.secure_url
//   await blog.save()
//   res.send({
//     message: 'Blog is Created'
//   })
// console.log("req file",req.file)
  console.log(req.file)

res.send({ok:true})
})


module.exports = router;
