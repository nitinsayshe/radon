# Radon
# Nitin Sayshe
Backend cohort May 2022 - Sep 2022

This Project Demonstrate how private functions can be used as modules by coverting the private function to public,
so that we can call them anywhere in a program. 

In this project we are creating three diffrent scripts which will contain the diffrent functions.
    1. logger.js
        1. contain the welcome function, which will print some data to console
    
    2. helper.js
        1. containd three function, which will print the date and month on console
            1. printDate()
            2. printMonth()
            3. getBatchInfo()
    3. formatter.js
        1. this file contain three function,
            1. trim()--- which will trim the extra spaces from begning anf ending of a string
            2. toLowerCase() ---it will convert the string to lowercase
            3. toUpperCase() ---it will convert the string to Uppercase
    
we have converted this private function to public,
using #module.export so , that we can call them from anywhere.
to import that module we use , #"require("path of module")" function
