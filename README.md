# movie_collection
backend application that add, deletes and lists of collection of movies. 

Database:
DynamoDB

Server-less logic hosting:
Amazon Lambda

API Endpoint management:
API Gateway



#### MOVE COLLECTION API DOCUMENTATION ####

Introduction:
The Movie Collection API creates, updates and deletes a collection of films.

Overview:
Authentication must be set in the request header with the following an api key. 

key                   value
x-api-key            {key value}

Status Codes:
200 status code = successful. 
400 status code = error. 
500 status code = error.

Rate limit:
Only single requests can be made at present.


Endpoints:
Get movies with:
GET https://myq7rts159.execute-api.us-west-2.amazonaws.com/prod/movies

GET /prod/movies HTTP/1.1
Host: myq7rts159.execute-api.us-west-2.amazonaws.com
x-api-key: {key value}
Cache-Control: no-cache
Postman-Token: 02b60508-5b01-8eb8-7e7b-e1173804b287



Add movies with:
POST https://myq7rts159.execute-api.us-west-2.amazonaws.com/prod/movies

POST /prod/movies HTTP/1.1
Host: myq7rts159.execute-api.us-west-2.amazonaws.com
x-api-key:  {key value}
Content-Type: application/json
Cache-Control: no-cache

Sample Request Body:
{
  "title": "Movie Title",
  "format": "Streaming",
  "length": "90",	
  "release": "1900",
  "rating": "0"
}


Update a movie with:
PUT https://myq7rts159.execute-api.us-west-2.amazonaws.com/prod/movies

PUT /prod/movies HTTP/1.1
Host: myq7rts159.execute-api.us-west-2.amazonaws.com
x-api-key:  {key value}
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 408ac00d-9c82-ef62-e7f2-0e71bc8aed4f

Sample Request Body (** must include id property and a valid id **):
   {
        "length": "30",
        "id": "d7c3dba0-6354-11e8-a7d2-a54700c1805c",
        "release": "1920",
        "rating": "07",
        "format": "Streaming",
        "title": "Movie Title"
    }


Delete a movie with:
DELETE https://myq7rts159.execute-api.us-west-2.amazonaws.com/prod/movies/{id}

DELETE /prod/movies/{id} HTTP/1.1
Host: myq7rts159.execute-api.us-west-2.amazonaws.com
x-api-key:  {key value}
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache
Postman-Token: ac29d677-a5e1-3c47-a1bc-e0c25ff0816b


