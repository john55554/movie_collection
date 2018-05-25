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
Currently no authentication needed. Authentication to be added in the next version.


Status Codes:
200 status code = successful. 
400 status code = error. 
500 status code = error.

Rate limit:
Only single requests can be made at present.


Endpoints:
GET https://myq7rts159.execute-api.us-west-2.amazonaws.com/prod/movies

GET /prod/movies HTTP/1.1
Host: myq7rts159.execute-api.us-west-2.amazonaws.com
Cache-Control: no-cache
Postman-Token: 02b60508-5b01-8eb8-7e7b-e1173804b287



POST https://myq7rts159.execute-api.us-west-2.amazonaws.com/prod/movies

POST /prod/movies HTTP/1.1
Host: myq7rts159.execute-api.us-west-2.amazonaws.com
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
