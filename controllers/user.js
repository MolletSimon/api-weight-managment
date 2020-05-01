const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                ...req.body,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'utilisateur crée !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ username: req.body.username })
        .then(user => {
            if (!user) {
                throw 'Utilisateur introuvable !';
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        throw 'Mot de passe incorrect !'
                    }
                    res.status(200).json({
                        username: user.username,
                        token: jwt.sign(
                            { username: user.username },
                            'difhzdiufhzihuihzduhaef',
                            { expiresIn: '72h' }
                        )
                    });
                });
        })
        .catch(error => res.status(500).json(error));
}

exports.modifyUserInfos = (req, res, next) => {
    User.updateOne({ username: req.params.user }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Informations modifiées !' }))
        .catch(error => res.status(400).json(error));
}

exports.getAllUsers = (req, res, next) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json(error));
}

exports.getOneUser = (req, res, next) => {
    User.findOne({username: req.params.user})
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json(error));
}