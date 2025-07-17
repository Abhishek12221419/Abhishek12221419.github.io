db.employees.updateOne(
    {email:"john@gmail.com"},
    {$set:{salary:2000}}
)

db.employees.updateOne(
    {department:"IT"},
    {$set:{salary:3000}}

)

db.employees.updateMany(
    {department:"IT"},
    {$set:{salary:3000}}
)

db.employees.updateMany({},
    {$set:{points:1}}
)


db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:5}}
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:-1}}
)

db.employees.updateOne(
    {email:"Katherine@gmail.com"},
    {$set:{email:"katherine@gmail.com"}},
    {upsert:true}     //if email exist then it will update else will create a new entity

)


//delete document
db.employees.deleteOne({email:"katherine@gmail.com"})

db.employees.deleteMany({department:"Admin"})


db.employees.find().sort({name:1})   //ascending order
db.employees.find().sort({name:-1})  //descending order

db.employees.find().sort({salary:-1}).limit(1)

db.employees.find({},{_id:0, Empname:"$name"})


db.employees.updateMany(
    {},
    {$rename:{points:"Score"}}
)

db.employees.updateMany(
    {},
    {$unset:{Score:""}}
)


db.employees.updateMany({},{$set:{points:1}})



db.employees.updateMany(
    {},
    {$push:{rating:5}}
)
db.employees.updateMany(
    {},
    {$push:{rating:3}}
)
db.employees.updateMany(
    {},
    {$pull:{rating:{$gt:3}}}
)

db.employees.updateMany(
    {},
    {$addToSet:{location:"India"}}
)

db.employees.updateMany(
{},{$pop:{location:1}}    
)
db.employees.updateMany(
{},{$pop:{location:-1}}    
)