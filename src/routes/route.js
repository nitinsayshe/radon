const express = require('express');
const lodash=require('lodash')
const movieModule=require('../movies/movies')


const router = express.Router();

router.get('/test-me', function (req, res) {
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log("Split the 12-months in 4 equal size ",(lodash.chunk(months,4)))

    const arrOfOddNo=[]
    let i=0
    while(arrOfOddNo.length!==10){
        if (i%2!==0){
            arrOfOddNo.push(i)
        }
        i++
    }
    console.log("The Array of 1st 10 ODD Numbers",arrOfOddNo);
    console.log("Last 9 elements using Tails() ",lodash.tail(arrOfOddNo,9))

    const arr1=[1,5,47,45,7,12,8]
    const arr2=[12,51,47,45,57,12,18]
    const arr3=[15,5,447,45,76,12,8]
    const arr4=[111,54,47,475,17,12,8]
    const arr5=[1,5,471,45,7,12,83]
    console.log("array contains Unique element: ",lodash.union(arr1,arr2,arr3,arr4,arr5))


    let moviesDetails=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(moviesDetails))

    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/movies',function(req,res){
    console.log("Movies List:",movieModule.movie_list)
    res.send("Movie List : "+ movieModule.movie_list)
})

router.get('/movies/:indexNumber',function(req,res){
    console.log(movieModule.mov_index(req.params.indexNumber));
    res.send("Movie Based on their index : " +movieModule.mov_index(req.params.indexNumber))
})
router.get('/films',(req,res)=>{
    console.log(movieModule.films_list())
    res.send("Movies array of Object : "+ JSON.stringify(movieModule.films_list()))
})
router.get('/films/:filmId',(req,res)=>{
    console.log(movieModule.films_id(req.params.filmId))
    res.send("Get Movie by Id : "+movieModule.films_id(req.params.filmId))
})



module.exports = router;
// adding this comment for no reason