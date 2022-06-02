const movie_list=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
const movies_detais =[ 
    {
        id:1,
        name:"Avanger"
    },
    {
        id:2,
        name:"Ultron"
    },
    {
        id:3,
        name:"dr strange"
    },
    {
        id:4,
        name:"KGF"
    },
    {
        id:5,
        name:"RRR"
    }
];
   

const mov_index= (i)=>{
    if(i<movie_list.length){
        return (`movie name as per ${i} index  :-`,movie_list[i])
    }    
    return `No Movie is Present as per this index[${i}]`
}
const films_list =()=>{
    return movies_detais
}
const films_id=(id)=>{
    data=movies_detais.find((data)=>data.id==id)
    if (data!==undefined){
        return ("Movie Name as per ID:",data.name)
    }
    return ("‘No movie exists with this id’")
}

module.exports.movie_list=movie_list
module.exports.mov_index=mov_index
module.exports.films_list=films_list
module.exports.films_id=films_id

