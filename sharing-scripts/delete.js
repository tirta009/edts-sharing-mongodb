// Insert spammer document
db.customers.insertOne({
    _id: "testDelete",
    alias_name: "testDelete"
});

// Delete document by _id
db.customers.deleteOne({
    _id: "testDelete"
});

// Insert many spammer documents
db.customers.insertMany([
    {
        _id: "spammer1",
        full_name: "Spammer1"
    },
    {
        _id: "spammer2",
        full_name: "Spammer2"
    },
    {
        _id: "spammer3",
        full_name: "Spammer3"
    }
]);

// Delete many documents
db.customers.deleteMany({
    _id: {
        $regex: "spammer"
    }
})
