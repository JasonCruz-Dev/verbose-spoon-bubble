const Post = require('../models/post');
require = 'express-async-errors'

exports.createPost = async (req, res) => {

        const { title, meta, content, tags, featured, author, slug } = req.body;
    
        const newPost = new Post({ title, content, meta, tags, featured, author, slug });
    
        await newPost.save();
  
        res.json(newPost);
        

};



// Create a blueprint of Posts
