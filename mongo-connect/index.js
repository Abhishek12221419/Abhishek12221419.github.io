const mongoose = require('mongoose');

// Optional: Show MongoDB queries in console
mongoose.set('debug', true);

// Step 1: Connect to your local MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("✅ Connected to MongoDB");
    //insertStudent(); // Call insert after successful connection
    fetchStudents();
})
.catch((err) => {
    console.error("❌ Connection error:", err);
});

// Step 2: Define the student schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: String
});

// Step 3: Create a Mongoose model linked to 'students' collection
const Student = mongoose.model('Student', studentSchema, 'students');

// Step 4: Function to insert a student
function insertStudent() {
    const newStudent = new Student({
        name: "Abhishek",
        age: 21,
        grade: "A"
    });

    console.log("➡️ Attempting to insert student:", newStudent);

    newStudent.save()
        .then(() => {
            console.log("📥 Student inserted successfully!");
        })
        .catch((err) => {
            console.error("❌ Error inserting student:", err);
        });
}

function fetchStudents() {
    Student.find() // you can also add filters like { age: 20 }
    // Student.find({ grade: "A" })        // All students with grade A
    // Student.findOne({ name: "Riya" })   // First student with name Riya
    // Student.findById("yourObjectId") 
        .then((students) => {
            console.log("📄 All Students:");
            console.log(students);
        })
        .catch((err) => {
            console.error("❌ Error fetching students:", err);
        });
}