import jwt from 'jsonwebtoken';

class Auth {
    ensureToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== undefined) {
            const bearerToken = bearerHeader.split(' ')[1];
            jwt.verify(bearerToken, `${process.env.secretkey}`, (err, result) => {
                if (err) { res.status(403) }
                else { next() }
            })
        } else {
            res.status(403);
        }
    }
}

const auth = new Auth();
export default auth;