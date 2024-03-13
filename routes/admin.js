const express = require('express');
const {Blog , Package} = require('../models/model');
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).send({ message: "hello test" }); // Fix the typo here (mesage -> message)
});

router.get("/package", async (req, res) => {
      const packagesDetails = await Package.find().sort({createAt:-1})
      if(packagesDetails){
        res.status(200).json({ packagesDetails, message: 'Image uploaded successfully' })
      }else{
        res.status(400).json({ message: 'somthing wrong' })
      }
      
});

router.post("/package", async (req, res) => {
    const package = await new Package(req.body)
      const response = await package.save()
      if(response){
        res.status(200).json({ message: 'Image uploaded successfully' })
      }else{
        res.status(400).json({ message: 'somthing wrong' })
      }
      
});

router.put("/package", async (req, res) => {
      const response = await Package.findByIdAndUpdate(Id,req.body)
      if(response){
        res.status(200).json({ response, message: 'Image updated successfully' })
      }else{
        res.status(400).json({ message: 'somthing wrong' })
      }
      
});


router.delete("/package", async (req, res) => {;
      const response = await Package.findByIdAndDelete(Id)
      if(response){
        res.status(200).json({ response, message: 'Package Delete successfully' })
      }else{
        res.status(400).json({ message: 'somthing wrong' })
      }
      
});


router.get("/blog", async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).send({ blogs, message:"bolgs data fetching success" }); // Fix the typo here (mesage -> message)
});

router.post("/blog", async (req, res) => {
    const blog = await new Blog({
        heading,
        image:dataUrl,
        content
      })
      const response = await blog.save()
      if(response){
        res.status(200).json({ message: 'Image uploaded successfully' })
      }else{
        res.status(400).json({ message: 'somthing wrong' })
      }
      
});

router.put("/blog", async (req, res) => {;
      const response = await Blog.findByIdAndUpdate(Id,req.body)
      if(response){
        res.status(200).json({ response, message: 'Image updated successfully' })
      }else{
        res.status(400).json({ message: 'somthing wrong' })
      }
      
});


router.delete("/blog", async (req, res) => {;
      const response = await Blog.findByIdAndDelete(Id)
      if(response){
        res.status(200).json({ response, message: 'Blog Delete successfully' })
      }else{
        res.status(400).json({ message: 'somthing wrong' })
      }
      
});



module.exports = router;
