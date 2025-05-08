// select * from products where price > 1000000
db.products.find({
    $expr: {
        $gt: ["$price", 1000000]
    }
});

db.products.find({
    price : {
        $gt : 1000000
    }
});

// select * from products where price - 5000 < 0
db.products.find({
    $expr: {
        $lt: [
            {$subtract : ["$price",5000]},
            0
        ]
    }
});

// select * from customers where toUpper(_id) = 'BEDUL'
db.customers.find({
    $expr: {
        $eq: [
            { $toUpper: "$_id" },
            "BEDUL"
        ]
    }
});


// select * from products where name is not null and category is not null
db.products.find({
    $jsonSchema: {
        required: [ "name", "category"]
    }
});

// select * from products where name is not null and type(name) = 'string' and type(price) = 'long'
db.products.find({
    $jsonSchema: {
        required: [ "name"],
        properties: {
            name: {
                bsonType: "string"
            },
            price: {
                bsonType: "long"
            }
        }
    }
});

// select * from products where price % 5 = 0
db.products.find({
    price: {
        $mod: [5, 0]
    }
});

// select * from products where name like "%mie%"
db.products.find({
    name: {
        $regex: /mie/,
        $options: "i" //insensitive
    }
});

// select * from products where name like "Mie%"
db.products.find({
    name: {
        $regex: /^Mie/
    }
});

db.customers.insertOne({
    "_id" : "Tirta",
    "name" : "Tirta"
});

// select * from customers where _id = name
db.customers.find({
    $where: function(){
        return this._id == this.name;
    }
});

db.customers.find({
    $expr: {
        $eq: [
            "$_id" , "$name"
        ]
    }
});