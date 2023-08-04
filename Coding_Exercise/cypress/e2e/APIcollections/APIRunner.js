const newman = require('newman');
const path = require('path');
    
    var reportpath = path.resolve("cypress/CardsAPIReport");

newman.run({
    collection:'cypress/e2e/APIcollections/Cards.postman_collection.json',
    reporters: ['htmlextra'],
    iterationCount: 1,
    globalVar: [
        {"key": "application_id","value": process.env.apikey}
    ],
    reporter:{
        htmlextra:{
            export:reportpath+'/NewCard.html',
            logs:true,
            browserTitle:"Cards Game",
            title: "Cards Game"
        }
    }
    })