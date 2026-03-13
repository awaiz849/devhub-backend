const Post = require("../models/post")
// Create post
exports.createPost = async (req, res) => {
  try {
    const { content, userId } = req.body

    const post = await Post.create({
      user: userId,
      content,
    })

    res.status(201).json({
      message: "Post created successfully",
      post,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 })

    res.json(posts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
// like post
exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params
    const { userId } = req.body

    const post = await Post.findById(postId)

    if (!post) {
      return res.status(404).json({ message: "Post not found" })
    }

    // add user to likes
    post.likes.push(userId)

    await post.save()

    res.json({
      message: "Post liked",
      post,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
// unlike post
exports.unlikePost = async (req, res) => {
  try {
    const { postId } = req.params
    const { userId } = req.body

    const post = await Post.findById(postId)

    if (!post) {
      return res.status(404).json({ message: "Post not found" })
    }

    // remove like
    post.likes = post.likes.filter((id) => id.toString() !== userId)

    await post.save()

    res.json({
      message: "Post unliked",
      post,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.params

    const post = await Post.findById(postId)

    if (!post) {
      return res.status(404).json({ message: "Post not found" })
    }

    await post.deleteOne()

    res.json({
      message: "Post deleted successfully",
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
