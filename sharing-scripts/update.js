
// update products set category = "food" where _id = 1
db.products.updateOne({
    _id: 1
},{
    $set: {
        category: "food"
    }
});

// update products set category = "food" where _id = 2
db.products.updateOne({
    _id: 2
},{
    $set: {
        category: "food"
    }
});

// update products set tags = ["food"] where category = "food" and tags is null
db.products.updateMany({
    $and: [
        {
            category :{
                $eq: "food"
            }
        },
        {
            tags: {
                $exists: false
            }
        }
    ]
}, {
    $set: {
        tags: ["food"]
    }
})

// update products set test = "test", bebas = "bebas"
db.products.updateMany({}, [
    {
        $set: {
            test: "test",
            bebas: "Bebas",
        }
    }
]);

db.products.updateMany({}, [
    {
        $unset: [ "test", "bebas" ]
    }
]);

// insert wrong document
db.products.insertMany([
    {
        _id: 99,
        name: "Wrong Data",
        category: "Wrong"
    }
]);

// replace document with id 9
db.products.replaceOne({
    _id: 99
}, {
    name: "True Data",
    price: 99000,
    category: "True"
});

// alter table customers change name to alias_name
db.customers.updateMany({}, {
    $rename: {
        name: "alias_name"
    }
})