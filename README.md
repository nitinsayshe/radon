
Backend cohort
#POST-API
#Nitin Sayshe


This Assignment Demonstrate the Post API,
we have a player data , which is in the form of array of objects, we have to push the new object which is in the form of json we get the data from postman.

1. the first task is to read the existing data anf find wether the data which we are posting is already in database, for that i use higher order function ..find()  which will return true if data is present, 
else it will return undefined.

2. If find() return undefined , then only we will update the list os object.
    we will get the data from request.body , it will give us the json object,

3. final step is to return the msg if data already exist. 