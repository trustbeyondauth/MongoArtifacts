db.restaurants_sample.aggregate([
{ $match : { name : "Burger King" } } ,

{ $group : { 
            _id: {
                restaurant_id:"$restaurant_id" ,
                name:"$name",
                scoreAvg:{$avg:"$grades.score"},
                cuisine : "$cuisine",
                borough:"$borough",
                zipcode:"$address.zipcode"
                }
            }
},
{
    $project : {
        _id:0,
        name:"$_id.name",
        cuisine:"$_id.cuisine",
        borough:"$_id.borough",
        zipcode:"$_id.zipcode",
        scoreAverage:"$_id.scoreAvg"
    }
},
{ 
    $sort : { scoreAverage : -1 } 
},      
]);
