const router = require('express').Router();

const { createPost } = require("../controllers/post");
const multer = require('../middleware/multer');
const { postValidator, validate } = require('../middleware/postValidator');
const { parseData } = require('../middleware');

// Create API post endpoint, and callback function
router.post(
    '/create', 
    multer.single('thumbnail'),
    parseData, 
    postValidator, 
    validate , 
    createPost
    );

// Get latest API post endpoint
// router.get('api/post/latest');

//export router
module.exports = router;