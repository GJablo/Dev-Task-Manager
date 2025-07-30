const jwt = require('jsonwebtoken'); // For JWT token verification

// Middleware to protect routes
exports.protect = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ message: 'Not authorized, no token' });

  const token = auth.split(' ')[1]; // Extract token from header

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: 'Invalid token' });
  }
};

// Middleware to restrict access based on user role
exports.authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: You do not have permission to perform this action' });
    }
    next();
  };
};
