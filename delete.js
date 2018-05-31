'use strict';
    
var AWS = require('aws-sdk'),
documentClient = new AWS.DynamoDB.DocumentClient();


exports.deleteMovie = function(event, context, callback){ 

var params = {
        TableName: process.env.TABLE_NAME,
        Key: {"id" : event['pathParameters']['proxy']},
    };
    
console.log("Attempting a delete...");
documentClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        data = "Record successfully deleted";
        console.log("DeleteItem succeeded:", data);
    }

    var responseBody = {
        input: event,
        messsage: data,
        error: err
    };
    
        var response = {
        statusCode: 200,
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    callback(null, response);

});


}

    