
var AWS = require('aws-sdk');
uuid = require('uuid');
AWS.config.loadFromPath('./config/config.json');

var db = new AWS.DynamoDB();
var movieResults ={};
var api = require('./movie-api.js');

api.startApiCall(function(error, body){
 if (error) {
     throw new Error(error)
    }

    else{
     movieResults  = body.results;  
     
     /*Ideally we should loop over the movieResults object and populate the params variable before inserting */
     var params = {
        RequestItems: {
          "movie_collection": [
             {
               PutRequest: {
                 Item: {
                    "id": { "S": uuid.v1() },
                     "title": { "S": movieResults[0].title },
                     "format": { "S": "streaming" },
                     "length": { "N": "90" },
                     "release":{"S": movieResults[0].release_date},
                     "rating": { "S": movieResults[0].vote_average.toString()}
                 }
               }
            },
               {
               PutRequest: {
                Item: {
                   "id": { "S": uuid.v1() },
                    "title": { "S": movieResults[1].title },
                    "format": { "S": "DVD" },
                    "length": { "N": "90" },
                    "release":{"S": movieResults[1].release_date},
                    "rating": { "S": movieResults[1].vote_average.toString()}
                }
              }
            },
              {
              PutRequest: {
                Item: {
                   "id": { "S": uuid.v1() },
                    "title": { "S": movieResults[2].title },
                    "format": { "S": "streaming" },
                    "length": { "N": "90" },
                    "release":{"S": movieResults[2].release_date},
                    "rating": { "S": movieResults[2].vote_average.toString()}
                }
              }
            },
              {
              PutRequest: {
                Item: {
                   "id": { "S": uuid.v1() },
                    "title": { "S": movieResults[3].title },
                    "format": { "S": "streaming" },
                    "length": { "N": "90" },
                    "release":{"S": movieResults[3].release_date},
                    "rating": { "S": movieResults[3].vote_average.toString()}
                }
              }
            
             },
            ]
             }
        };
      
      db.batchWriteItem(params, function(err, data) {
        console.log('params:', JSON.stringify(params));
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Batch insert was successful");          
        }
      });
    
    }
});


