const express = require("express")
const router = express.Router()

const {
  createPost,
  getPosts,
  likePost,
  unlikePost,
  deletePost,
} = require("../controllers/postController")

const authMiddleware = require("../middleware/authMiddleware")

router.get("/", getPosts)

router.post("/", authMiddleware, createPost)
router.post("/:postId/like", authMiddleware, likePost)
router.post("/:postId/unlike", authMiddleware, unlikePost)
router.delete("/:postId", authMiddleware, deletePost)

module.exports = router
