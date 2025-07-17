db.employees.find({name:{$regex:"y"}})

db.employees.find({name:{$regex:"Cathy"}})

db.employees.find({name:{$regex:"cathy",$options:"i"}})

db.employees.find({name:{$regex:"^c",$options:"i"}})

db.employees.find({name:{$regex:"y$",$options:"i"}})