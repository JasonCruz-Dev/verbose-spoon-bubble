const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
    
}, 
{
    timestamps: true,
}
);

// Whatever you reference 'Post' in your schema, you have to reference it under tags: String, ref: 'Auth';
module.exports = mongoose.model('Post', postSchema);