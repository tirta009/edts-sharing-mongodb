//  insert some products
db.products.insertMany([
    {
        _id: 6,
        name: "Logitech M235 Wireless Mouse",
        price: new NumberLong(175000),
        category: "laptop",
        tags: [
            "logitech", "mouse", "accessories"
        ]
    },
    {
        _id: 7,
        name: "Havit Cooler Pad Gaming 5Fan Blue led F2082",
        price: new NumberLong(200000),
        category: "laptop",
        tags: [
            "cooler", "laptop", "accessories", "fan"
        ]
    },
    {
        _id: 8,
        name: "Samsung LC24F390FHEXXD Curved Monitor ",
        price: new NumberLong(1750000),
        category: "computer",
        tags: [
            "samsung", "monitor", "computer"
        ]
    },
    {
        _id: 9,
        name: "Adibas Running",
        price: new NumberLong(3000000),
        category: "shoes",
        tags: [
            "sneaker", "sport", "shoes"
        ],
        variants: [
            { size: 40, color: "red"},
            { size: 41, color: "blue"},
            { size: 42, color: "red"}
        ]
    },
    {
        _id: 10,
        name: "Nike Running",
        price: new NumberLong(2000000),
        category: "shoes",
        tags: [
            "sneaker", "sport", "shoes"
        ],
        variants: [
            { size: 40, color: "red"},
            { size: 45, color: "blue"}
        ]
    }
]);

// select * from products where (tags = "samsung" and tags = "monitor")
db.products.find({
    tags: {
        $all: ["samsung", "monitor"]
    }
});

// select * from products where tags in ("samsung",  "logitect")
db.products.find({
    tags: {
        $elemMatch: {
            $in: ["samsung", "logitech"]
        }
    }
});

db.products.find({
    tags: {
        $in: ["samsung", "logitech"]
    }
});

db.products.find({
    variants: {
        $elemMatch: {
            size: 40,
            color: "red"
        }
    }
});


// select * from products where size(tags) = 3
db.products.find({
    tags: {
        $size: 3
    }
});
