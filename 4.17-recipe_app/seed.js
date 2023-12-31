'use strict';

const mongoose = require('mongoose'),
    Subscriber = require('./models/subscriber');

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    { useNewUrlParser: true }
);

mongoose.connection;

const contacts = [
    {
        name: "Jon Wexler",
        email: "jon@jonwexler.com",
        zipCode: 10016,
    }, {
        name: "Chef Eggplant",
        email: "eggplant@recipeapp.com",
        zipCode: 20331,
    }, {
        name: "Professor Souffle",
        email: "souffle@recipeapp.com",
        zipCode: 19103,
    }
];

Subscriber.deleteMany()
    .exec()
    .then(() => {
        console.log("Subscriber data is empty!");
    });

let commands = [];

contacts.forEach((c) => {
    commands.push(Subscriber.create({
        name: c.name,
        email: c.email,
        zipCode: c.zipCode,
    }));
});

Promise.all(commands)
    .then(r => {
        console.log(JSON.stringify(r));
        mongoose.connection.close();
    })
    .catch(error => {
        console.log(`ERROR: ${error}`);
    });