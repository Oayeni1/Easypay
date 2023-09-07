// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['Authorization'];
//     const token = authHeader && authHeader.split(',')[1];
//     if (!token) {
//         res.sendStatus(401);
//     }
//     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//         if (err) {
//             res.sendStatus(401);
//         };
//         req.user = user;
//         next();
//     });
// }

// module.exports =authenticateToken;