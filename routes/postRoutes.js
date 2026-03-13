const express = require("express")
const router = express.Router()

const {
  createPost,
  getPosts,
  likePost,
  unlikePost,
  deletePost,
} = require("../controllers/postController")

router.post("/", createPost)
router.get("/", getPosts)
router.post("/:postId/like", likePost)
router.post("/:postId/unlike", unlikePost)
router.delete("/:postId", deletePost)

module.exports = router
