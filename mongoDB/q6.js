db.employees.find(
    {salary:{$gt:3000}},
    {name:1}
).limit(2).skip(1)


db.employees.find(
    {$and: [{salary:{$gt:1000}},{department:"IT"}]},
    {name:1}
)
db.employees.find(
    {$or: [{salary:{$gt:1000}},{department:"IT"}]},
    {name:1}
)


db.employees.aggregate([
    {$match: {salary: {$gt:2000}}},
    {$project: {name:1,salary:1}}
])
db.employees.aggregate([
    {$match: {salary: {$gt:1000}}},
    {$project: {name:1,salary:1,location:1}},
    {$sort: {name:1}},
    {$limit:1}
])

db.employees.updateMany(
    {},
    {$addToSet: {location: "FL"}}
)
db.employees.aggregate([
    {$project: {_id: 0, name: 1, location:1}},
    {$unwind: "$location"},
])

db.employees.aggregate([   //This is how we do in aggregate operator
    {$project: {_id: 0, EmpName: "$name"}}
])
// db.employees.find(  //This is basic which done by using find operator
//     {},
//     {_id: 0, EmpName: "$name"}
// )

db.employees.aggregate([
    {$project: {name:0}}
])

db.employees.aggregate([
    {$group: {_id:"$department",total: {$sum: "$salary"}}}
])
db.employees.aggregate([
    {$group: {_id:null,total: {$sum: "$salary"}}}
])

// Created New Collection :- orders
db.createCollection("orders")

db.orders.insertOne({
    empID: ObjectId('685a8a593bc552947c748a5f'),
    orderValue:2500
})
db.orders.insertOne({
    empID: ObjectId('685bb93fc74c74714c748a5f'),
    orderValue:2600
})
db.orders.insertOne({
    empID: ObjectId('685bb93fc74c74714c748a60'),
    orderValue:2700
})
db.orders.insertOne({
    empID: ObjectId('685bca0fc74c74714c748a66'),
    orderValue:2800
})


db.employees.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empID",
            as: "orders", //We can give any name for it
        },
    },
])

db.employees.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empID",
            as: "orders", //We can give any name for it
        },
    },
    {$unwind:"$orders"}
])

db.employees.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empID",
            as: "orders", //We can give any name for it
        },
    },
    {$unwind:"$orders"},
    {$project: {name:1,"orders.orderValue":1}}
])

db.employees.aggregate([
    {$match:{salary: {$gt:2000}}},
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empID",
            as: "orders", //We can give any name for it
        },
    },
    {$unwind:"$orders"},
    {$project: {name:1,"orders.orderValue":1,salary:1}}
])



// Create New Collection :- empCountry
db.createCollection("empCountry"),

db.empCountry.insertOne({
    empID: ObjectId('685a8a593bc552947c748a5f'),
    country: "USA"
})
db.empCountry.insertOne({
    empID: ObjectId('685bb93fc74c74714c748a5f'),
    country: "UK"
})
db.empCountry.insertOne({
    empID: ObjectId('685bb93fc74c74714c748a60'),
    country: "SA"
})
db.empCountry.insertOne({
    empID: ObjectId('685bca0fc74c74714c748a66'),
    country: "AU"
})

db.employees.aggregate([
    {
        $lookup: {
            from: "empCountry",
            localField: "_id",
            foreignField: "empID",
            as: "Country",
        },
    },
])
db.employees.aggregate([
    {
        $lookup: {
            from: "empCountry",
            localField: "_id",
            foreignField: "empID",
            as: "Country",
        },
    },
    {$unwind: "$Country"}
])
db.employees.aggregate([
    {
        $lookup: {
            from: "empCountry",
            localField: "_id",
            foreignField: "empID",
            as: "Country",
        },
    },
    {$unwind:"$Country"},
    {$project: {name:1,"Country.country":1}}
])
db.employees.aggregate([  //Here, we lookup 2 collections with employees collection
    {
        $lookup: {
            from: "empCountry",
            localField: "_id",
            foreignField: "empID",
            as: "Country",
        },
    },
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "empID",
            as: "orders",
        },
    },
    {$unwind:"$orders",},
    {$unwind:"$Country",},
    {$project: {name:1,"Country.country":1,"orders.orderValue":1}}
])


db.employees.getIndexes()
db.employees.createIndex({"email":1})
db.employees.dropIndex("email_1")

db.employees.find({email:"john@gmail.com"}).explain("executionStats")




// Create New Collections :- students
db.createCollections("students")

db.students.insertMany([
    {country:"India",name:"Abhishek",age:21},
    {country:"India",name:"Abhishek",age:22},
    {country:"India",name:"Abhishek",age:23},
    {country:"UK",name:"Krishna",age:24},
    {country:"UK",name:"Krishna",age:25},
    {country:"UK",name:"Krishna",age:26}
])

db.employees.aggregate([
    {$group: {_id:{country:"$country",name:"$name"},total:{$sum:"$score"}}}
])