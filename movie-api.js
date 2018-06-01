
var config = require('./config/config.json');

request = require('request');

Request = function (options) {
    this.url = options.path,
    this.method = options.method,
    this.json = options.json,
    this.qs = options.qs,
    this.headers = options.headers,
    this.body = options.body

};

Request.prototype.call = function (callback) {
    request(this, function (error, response, body) {
        if (body) {
            callback(error, body)
        } else {
            console.log(error || "There was a problem placing your request");
            callback(error);
        }
    });
};

exports.startApiCall = function (callback) {
    options = {
        path: 'https://api.themoviedb.org/4/list/1',
        method: 'GET',
        qs: { api_key: config.movieAPIKey, page: '1' },
          headers: 
           { authorization: 'Bearer <<access_token>>',
             'content-type': 'application/json;charset=utf-8' },
          body: {},
          json: true 
        }; 
    
    var myRequest = new Request(options);
    myRequest.call(function(error, body) {
       callback && callback(error, body);
    });
};