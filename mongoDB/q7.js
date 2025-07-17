db.createCollection("posts")
db.createCollection("comments")


db.posts.insertMany([
    {_id:"p1",post:"Post1"},
    {_id:"p2",post:"Post2"},
   {$unwind:"$posts"}
])


db.comments.insertMany([
    {_id:"c1",pid:"p1",comment:"Comment1"},
    {_id:"c2",pid:"p1",comment:"Comment2"},
    {_id:"c3",pid:"p2",comment:"Comment1"},
    {_id:"c4",pid:"p2",comment:"Comment2"},
    {_id:"c5",pid:"p2",comment:"Comment3"},
])


db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments"
    }
  },
  {$unwind:"$comments"},
  {
    $project: {
      _id: 0,
      post: 1,
      "comments.comment":1
      
    },
    
  }
])

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}
)




db.comments.insertOne(
    {id:"c6",pid:"p1"},
    {$inc:{comment:1}}

)

db.comments.deleteOne(
    {id:"c6"}
    

)

db.createCollection("marks")
db.marks.insertMany([
    {name:"john",term:"t1",subject:"maths",score:98},
    {name:"john",term:"t2",subject:"maths",score:90},
    {name:"john",term:"t3",subject:"maths",score:88},
    {name:"john",term:"t1",subject:"science",score:92},
    {name:"john",term:"t2",subject:"science",score:82},
    {name:"john",term:"t3",subject:"science",score:82},
    {name:"cathy",term:"t1",subject:"maths",score:98},
    {name:"cathy",term:"t2",subject:"maths",score:92},
    {name:"cathy",term:"t3",subject:"maths",score:92},
    {name:"cathy",term:"t1",subject:"science",score:82},
    {name:"cathy",term:"t2",subject:"science",score:92},
    {name:"cathy",term:"t3",subject:"science",score:80},
])


db.marks.aggregate([
    {$group:{_id:"$name",AvgScore:{$avg:"$score"}}

    }
])


db.marks.aggregate([
    {$group:{_id:"$subject",AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

db.marks.aggregate([
    {$group:{_id:{term:"$term",subject:"$subject"},
    AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}  
])

db.marks.aggregate([
  { $match: { name: "john" } },
  {$group:{_id:{term:"$term",name:"$name"},
   AvgScore:{$avg:"$score"}}},
])


db.createCollection("studentInfo")
db.studentInfo.insertMany([
    {_id:"s1",name:"John"},
    {_id:"s2",name:"Cathy"}
])


db.employees.updateMany(
    {},
    {$rename:{points:"Score"}}
)

db.marks.updateMany(
    {},
    {$rename:{name:"sid"}}
)

db.marks.updateMany(
    {},
    {$rename:{name:"sid"}}
)

db.marks.updateMany(
    {sid:"john"},
    {$set:{sid:"s1"}}
)

db.marks.updateMany(
    {sid:"cathy"},
    {$set:{sid:"s2"}}
)


db.studentInfo.aggregate([
    {$match:{name:"s1"}},
    {
        $lookup:{
            from:"marks",
            localField:"_id",
            foreignField:"sid",
            as:"marks",  

        },
    },
    {$unwind:"$marks"},
    //group
    {$group:{_id:"$marks.term",
    TotalScore:{$sum:"$marks.score"}}}
])



db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1,Grade:"Grade A"}}
])

db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1,Grade:{$cond:[{$gt:["$salary",3000]},"Grade A","Grade B"]}}}
])
db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        Grade:{$cond:
            { if:{$gt:["$salary",3000]},
            then:"Grade A",
            else:"Grade B"}}
        }}
])


db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        Grade:{$cond:
            { if:{$gt:["$salary",3000]},
            then:"Grade A",
            else:"Grade B"}}
        }},
    {$out:"GradeWiseSalary"}  // It will create new collection like GradeWiseSalary and put the data into that new maded collection
])
// OR
db.createView("salaryView","employees",[  // Creates new collection name salaryView and employees we have used to compare data and use condition on that
    {$project:{
        _id:0,
        name:1,
        salary:1,
        department:1,
        Grade:{$cond:
            { if:{$gt:["$salary",3000]},
            then:"Grade A",
            else:"Grade B"}}
        }}
])

// // TO BACKUP
// mongodump -d lpu -o D:\Abhihsek\mongoDB_lpubackup   // d -> dataBase && o -> out

// // TO RESTORE
// mongorestore -d lpu D:\Abhishek\mongoDB_lpubackup\lpu