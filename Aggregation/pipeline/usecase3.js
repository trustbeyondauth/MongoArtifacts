db.restaurants_sample.aggregate([{

    $match : { borough:"Manhattan"} } ,
{

    $group : { 

            _id: {

                cuisine : "$cuisine",

                borough:"$borough"

                }

             ,restaurants_count: { $sum: 1 }

     }

},

{

    $project : {

        _id:0,

        cuisine:"$_id.cuisine",

        borough:"$_id.borough",

        numberOfRestaurants : "$restaurants_count"

    }

},
{

    $sort : { cuisine : 1 } 

},

{   $out : "manhattan_cuisines_stats"}
]);
