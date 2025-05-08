//select category, count(category) from products where category is not null
db.products.aggregate([
    {
        $match :{
            category : { $exists : true}
        }
    },
    {
        $group: {
            _id: "$category", totalCategory: { $sum: 1 }
        }
    }
])

//select category, count(category) as totalCategory from products where category is not null and price >= 10000
//order by totalCategory desc
db.products.aggregate([
    {
        $match :{
            $and : [
                {category : { $exists : true}},
                {price : {$gte : 10000}}
            ]
        }
    },
    {
        $group: {
            _id: "$category", totalCategory: { $sum: 1 }
        }
    },
    {
        $project : {
            _id : 0,
            category : "$_id",
            totalCategory : 1
        }
    },
    {
        $sort :  {
            totalCategory : -1
        }
    }
])