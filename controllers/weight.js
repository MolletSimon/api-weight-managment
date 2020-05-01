const Weight = require('../models/Weight');

exports.addWeight = (req, res, next) => {
    const weight = new Weight({
        ...req.body
    });
    weight.save()
        .then(() => res.status(201).json({ message: 'Saisie effectuée' }))
        .catch(error => res.status(400).json(error));
}

exports.modifyWeight = (req, res, next) => {
    Weight.updateOne({_id: req.params.id}, {...req.body})
        .then(() => res.status(200).json({message: 'Saisie Modifiée !'}))
        .catch(error => res.status(400).json(error));
}

exports.deleteWeight = (req, res, next) => {
    Weight.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({ message: 'Saisie supprimée' }))
        .catch(error => res.status(400).json(error));
}

exports.getOneWeight = (req, res, next) => {
    Weight.findOne({ _id: req.params.id })
        .then(weight => res.status(200).json(weight))
        .catch(error => res.status(400).json(error));
}

exports.getAllWeight = (req, res, next) => {
    Weight.find()
        .then(weights => res.status(200).json(weights))
        .catch(error => res.status(400).json(error))
}

exports.getAllWeightByUser = (req, res, next) => {
    Weight.find({userId: req.params.userId})
        .then(weights => res.status(200).json(weights))
        .catch(error => res.status(400).json(error));
}