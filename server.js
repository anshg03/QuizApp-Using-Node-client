const express = require('express');
const mongo = require('mongodb').MongoClient;
const db = require('./config/config');
var port = process.env.PORT || 8000;
const app = express();
const cors=require('cors');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

mongo.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err)
        return console.log(err);
    const database = db.db("QuestionsSet")
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('connected to db');
    }); 
})