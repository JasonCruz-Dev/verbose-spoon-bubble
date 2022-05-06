const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    meta: {
        type: String,
        required: true,
        trim: true
    },
    tags: [String],
    author : {
        // This is required if you want to add users.
        // type: mongoose.Schema.Types.ObjectId, 
        // res: 'User',
        type: String,
        default: 'Admin',

    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    thumbnail: {
        type: Object,
        url: {
            type: URL,
        },
        public_Id: {
            type: String,
        }
    },
}, {
    timestamps: true,
},
{
    collection: 'Post'
},
);

// Whatever you reference 'Post' in your schema, you have to reference it under tags: String, ref: 'Auth';
module.exports = mongoose.model('Post', postSchema);