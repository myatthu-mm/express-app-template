import User from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UsersController {
    signUp(req, res) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            }
            else {
                const user = new User({
                    email: req.body.email,
                    password: hash
                });
                user.save().then(result => {
                    res.status(200).json({
                        success: 'New user has been created',
                        data: result
                    });
                }).catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
            }
        });
    }

    signIn(req, res) {
        User.findOne({ email: req.body.email })
            .exec()
            .then(user => {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            failed: 'Unauthorized Access'
                        });
                    }
                    if (result) {
                        const JWTToken = jwt.sign({
                            email: user.email,
                            _id: user._id
                        },
                            `${process.env.secretkey}`,
                            {
                                expiresIn: '60s'
                            });
                        return res.status(200).json({
                            success: 'Welcome to the JWT Auth',
                            token: JWTToken
                        });
                    }
                    return res.status(401).json({
                        failed: 'Unauthorized Access'
                    });
                });
            })
            .catch(error => {
                res.status(500).json({
                    error: error
                });
            });
    }

    getUsers(req, res) {
        res.status(200).json({
            success: 'U got protected access',
        })
    }
}

const userController = new UsersController();
export default userController;