// select * from customers
db.customers.find();

// select *  from customers where _id = 'bedul'
db.customers.find({
    _id: "bedul"
});

// select * from customers where fullName = 'Kenneth Hakim'
db.customers.find({
    fullName: "Kenneth Hakim"
});

// select * from products
db.products.find();

// select * from products where price = 2000
db.products.find({
    price: 2000
});

// select * from orders
db.orders.find();

// select * from orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});