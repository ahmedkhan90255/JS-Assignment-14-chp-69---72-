document.write(`<h1> Create a constructor function with some properties. <br>
Now create multiple records using the constructor. </h1>`);

function Student(firstname, lastname, rollno, courses) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.rollNo = rollno;
  this.courses = courses;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var student1 = new Student("Ahmed", "Khan", "174366", "JavaScript");
var student2 = new Student("Shahzaib", "Anees", "174367", "JavaScript");
var student3 = new Student("Abrar ul", "Haque", "174368", "JavaScript");
var student4 = new Student("Moiz", "Khan", "174369", "JavaScript");

document.write(
  `<div><table><tr><th>Full Name</th> <th>Roll No.</th> <th>Course</th></tr> 
   <tr><td>${student1.firstName} ${student1.lastName}</td> <td>${student1.rollNo}</td> <td>${student1.courses}</td></tr> 
   <tr><td>${student2.firstName} ${student2.lastName}</td> <td>${student2.rollNo}</td> <td>${student2.courses}</td></tr> 
   <tr><td>${student3.firstName} ${student3.lastName}</td> <td>${student3.rollNo}<td> ${student3.courses}</td></tr> 
   <tr><td>${student4.firstName} ${student4.lastName}</td> <td>${student4.rollNo}<td> ${student4.courses}</td></tr></div>`
);
