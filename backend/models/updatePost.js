export const updatePost = async (req, res) => {

    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    const updatedPost = {
        creator, title, message, tags, selectedFile, _id: id
    };

    await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);

}