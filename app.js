const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const weightRoutes = require('./routes/weight');
const userRoutes = require('./routes/user');
//connection mongodatabase
mongoose.connect(
        'mongodb+srv://molletsimon:bspahOcz603eQvIT@cluster0-twfrq.mongodb.net/Weight?retryWrites=true&w=majority',
        {useNewUrlParser: true,
        useUnifiedTopology: true})
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/weight', weightRoutes);
app.use('/api/user', userRoutes);

module.exports = app;