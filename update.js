'use strict';
    
var AWS = require('aws-sdk'),
documentClient = new AWS.DynamoDB.DocumentClient();


exports.updateMovie = function(event, context, callback){ 

console.log('this is the event', event);

var params = {
        TableName: process.env.TABLE_NAME,
        Key: {"id" : event.id},
        UpdateExpression: "set title= :title,  rating= :ra, #release= :r , #format= :f, #length= :l", 
        ExpressionAttributeValues:{
            ":title":event.title,
            ":ra": event.rating,
            ":r": event.release,
            ":f": event.format,
            ":l": event.length
        },
        ExpressionAttributeNames: { "#length": "length", "#release": "release", "#format": "format"},
        ReturnValues:"UPDATED_NEW"
    };
    
    
documentClient.update(params, function(err, data)
{callback(err, data);
});
}


