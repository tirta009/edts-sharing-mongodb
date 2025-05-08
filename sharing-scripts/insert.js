//insert customers
db.customers.insertOne({
    _id: "bedul",
    name: "bedul Alkatri",
    realName: "Fajar Rifai"
});

db.customers.insertOne({
    _id: "om",
    name: "Om Kenneth",
    fullName : "Kenneth Hakim"
});

// Insert document products
db.products.insertMany([
    {
        _id: 1,
        name: "Indomie Ayam Bawang",
        price: new NumberLong(2000)
    },
    {
        _id: 2,
        name: "Gula Pahit",
        price: new NumberLong(2000)
    }
]);

db.products.insertOne({
    name: "Parfum Wangi",
    price: 10000
});

// Insert document orders
db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong(8000),
    items: [
        {
            product_id: 1,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        },
        {
            product_id: 2,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        }
    ]
});