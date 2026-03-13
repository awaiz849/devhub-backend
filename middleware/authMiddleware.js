const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    // Check if Authorization header exists
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" })
    }

    // Extract token from "Bearer TOKEN"
    const token = authHeader.split(" ")[1]

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Attach user ID to request object
    req.user = decoded.id

    // Move to next middleware / controller
    next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" })
  }
}

module.exports = authMiddleware
