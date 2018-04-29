db.restaurants_sample.aggregate([ 
//db.sample.aggregate([ 

{ $match : { 
    borough:"Manhattan",
    $or:[{cuisine:"Italian"},{cuisine:"Hamburgers"}]
    //name : "Subway"
   // "grades":{ $exists: true, $ne: [] }
    } } ,
{ $group : { _id: { 
    //restaurant_id:{$push : "$restaurant_id"}, 
 //  restaurant_id:"$restaurant_id",
    name:"$name"
    ,cuisine : "$cuisine"
    ,borough:"$borough"
    }
    //,resaurant_name:"$name"
   // ,restaurant_ids : { $push:{restaurant_id:"$restaurant_id", scores:{$avg:"$grades.score"}}}
   ,restaurants_count: { $sum: 1 }
   
   
    //restaurant_id:"$restaurant_id"
  //, scores:"$grades.score"
    //scores:{$avg:"$grades.score"}}
    
         }},
         {$project : {_id:0,name:"$_id.name", cuisine:"$_id.cuisine", borough:"$_id.borough", numOBranches : "$restaurants_count"}},
  { $sort : { numOBranches : -1 } },      
//{$unwind:'$_id.scores'},
/*{ $project:{_id:"$_id.restaurant_id",restaurant_id:"$_id.restaurant_id",name: "$_id.name",
    avgScore:"$_id.scores"}}    ,
   { $sort : { avgScore : -1 } },
   { $limit : 5 },
         */
  // { $mergeObjects: [ this, "reportscore"] }
  // { $out : "reportscore" }
    
]);
