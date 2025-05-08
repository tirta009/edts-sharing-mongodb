db.getCollectionNames();

db.getCollectionInfos();

//tidak error walaupun collectionnya belum ada
db.getCollectionNames("products");

// Membuat Collection customers
db.createCollection('customers');

// Membuat Collection products
db.createCollection('products');

// Membuat Collection orders
db.createCollection('orders');

//cek db nya sudah ada
show databases;

//find all data
db.products.find();

//count all data
db.products.count()

//drop collection
db.products.drop()