document.write(`<h1> Create an object with properties name, email, password, age,  <br>
gender, city, country. <br>
Check if age and country properties exist in object or not. <br>
Also check firstName and lastName properties in object. </h1>`)

var logInInput = {
    name: "Ahmed",
    email: "xyz@gmail.com",
    password: "12345",
    age: "xyz",
    gender: "male",
    city: "Karachi",
    country: "Pakistan",
}

console.log(logInInput);


console.log("age" in logInInput);// Checking whether the age key exist in object or not

console.log("country" in logInInput); //Checking whether the country key exist in object or not

console.log("firstName" in logInInput); // Checking whether the firstName key exist in object or not

console.log("lastName" in logInInput); // Checking whether the lastName key exist in object or not