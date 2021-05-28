const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());
app.use('/posts', postsRoutes);
app.use('/images', express.static('images')); 
app.get('/api/christian', (req, res) => {
    //img = new Image();
    //img.src = './voiture/src/images/imagen0.jpg';

    res.send({
        id :'id0',
        msg : 'Bienvenue dans notre service API de voiture ! S authentifier pour laisser un commentaire',
        picture: 'imagen0.jpg'

        
    })
} )
app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './voiture/build/index.html')) 
})

app.listen(5500, () => console.log('Server started: 5500')); 

