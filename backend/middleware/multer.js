const multer  = require('multer');

// The diskStorage returns a StorageEngine implementation configured to store files on the local system. You can pass the destintation that you want your file from the frontend.
const storage = multer.diskStorage({ })
const upload = multer({ dest: 'uploads/' });

const fileFilter = (req, file, cb) => {
    // With this "if" statement, we are being explicit in making sure we only are accepting images of a particular type, such as image/jpg, image/png etc. these images that are uploaded will be uploaded into our cloud for storage.
    if(file.mimetype.includes('image')){
        // This callback will take 2 values: the 'error' and if you want to move forward or not. If you choose not too move forward, just use a null or false.
        return cb('Error! Invalid image type/extension! Please use the following image types: jpeg, png, jpg', false)
    }
    cb(null, true)
    console.log(file);
};

// In ES6 if you have a different storage you can be specific with your storage if you wanted too. 
// multer({ storage: storage }); or multer({ storage: passwords });

module.exports = multer({ storage, fileFilter})