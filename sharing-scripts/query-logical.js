// select * from products where category in ('laptop', 'handphone') and price > 20000000
db.products.find({
    $and: [
        {
            category: {
                $in: ["laptop", "handphone"]
            }
        },
        {
            "price": {
                $gt: 20000000
            }
        }
    ]
});

// select * from products where category not in ('laptop', 'handphone')
db.products.find({
    category: {
        $not: {
            $in: ["laptop", "handphone"]
        }
    }
});

// select * from products where price between 10000000 and 20000000 and category != 'food'
db.products.find({
    $and: [
        {
            price: {
                $gte: 10000000,
                $lte: 20000000
            }
        },
        {
            category: {
                $ne: 'food'
            }
        }
    ]
});

// select * from orders where item.product_id = 1 or total = 90000
db.orders.find({
    $or: [
        {
            "items.product_id": {
                $eq: 1
            }
        },
        {
            total: {
                $eq: 90000
            }
        }
    ]
});