export const createPost = async (req, res) => {

    const { title, message, selectedFile, create, tags } = req.body;

    const newPostMessage = new PostMessage(
        { title, message, selectedFile, creator, tags }
    )

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}