db.restaurants_sample.aggregate([ 

{ 	$match : { 
		borough:"Manhattan",
		$or:[{cuisine:"Italian"},{cuisine:"Hamburgers"}]   
		} 
} ,
{ 	$group : { _id: { name:"$name",cuisine : "$cuisine",borough:"$borough"}
   ,restaurants_count: { $sum: 1 }
   }
},
{	$project : {
		_id:0,name:"$_id.name",
		cuisine:"$_id.cuisine", 
		borough:"$_id.borough", 
		numOBranches : "$restaurants_count"
	}
},
{ 	$sort : { 
		numOBranches : -1 
	} 
},      
]);
