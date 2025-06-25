// JSON

const student = '{"name": "Amy", "age": 21}';
const studentObject = JSON.parse(student);
console.log(student);
console.log(student.name);
console.log(studentObject);
console.log(studentObject.name);

const studentString = JSON.stringify(studentObject);
console.log(studentString);
console.log(studentString.name);