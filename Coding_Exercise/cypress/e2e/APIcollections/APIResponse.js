const editJsonFile = require('edit-json-file');
const { readFileSync } = require('fs');
const newman = require('newman');
const filepath = 'cypress/e2e/APIcollections/selectionController.postman_collection.json';

var reportpath = path.resolve("cypress/CardsAPIReport");
    fs = require('fs');
    newman.run({
        collection: 'cypress/e2e/APIcollections/Access_Token.postman_collection.json',
        reporters: ['htmlextra'],
        iterationCount :1,
        globalVar:[
            {"Key" : "application_id","value": process.env.apikey}
        ],
        reporter:{
                    htmlextra:{
                        export:reportpath+'/ShuffleCards.html',
                        logs: true,
                        browserTitle:"Shuffle Results",
                        title: "ShuffleCards API-AccessToken Results"
                    }
                }
    }).on('request', function(error, data){
        if(error)
        {
            console.log(error)
        }
        else{
            fs.writeFile('cypress/e2e/APIcollections/response.json',data.response.stream.toString(),function(error){
                if(error){
                    console.log(error);
                }
            });
        const alltext = data.response.stream.toString().split(",");
        const atoken = alltext[0].split(":");
        const data1 = JSON.parse(fs.readFileSync(filepath));
        data1.item[0].request.auth.bearer[0].value = atoken[1].trim();
        str = (data1.item[0].request.auth.bearer[0].value).replace(/^"(.*)"$/, '$1');
        data1.item[0].request.auth.bearer[0].value = str;
        fs.writeFileSync(filepath, JSON.stringify(data1, null, 4));

        const rawValue = "";// this is where we dynamically updated json body
        data1.item[0].request.body.raw = rawValue;
        fs.writeFileSync(filepath, JSON.stringify(data1,null, 4));
        }
    });