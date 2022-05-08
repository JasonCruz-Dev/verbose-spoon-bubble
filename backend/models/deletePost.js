import mongoose from "mongoose";

export const deletePost = async (re,res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No post with id: ${id}');
    }

    await postMessage.findByIdAndRemove(id);
    res.json({ message: 'Post deleted successfully.' });

}