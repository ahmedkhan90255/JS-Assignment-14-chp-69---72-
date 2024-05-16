document.write(`<h1> Suppose you want to check population of your area, their <br>
educations and professions. <br>
Create a constructor function which holds following 
properties: <br>
Name, gender, address, education, profession,  <br>
Enter all records one by one.  </h1>`)


// Constructor function to create records
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to enter records
function enterRecord() {
    let name = prompt("Enter name:");
    let gender = prompt("Enter gender:");
    let address = prompt("Enter address:");
    let education = prompt("Enter education:");
    let profession = prompt("Enter profession:");
    
    // Create a new Person object with the entered details
    let person = new Person(name, gender, address, education, profession);
    
    // Return the created person object
    return person;
}

// Function to display a person's details
function displayPerson(person) {
    document.write(`<p>Name: ${person.name}</p><br>`);
    document.write(`<p>Gender: ${person.gender}</p><br>`);
    document.write(`<p>Address: ${person.address}</p><br>`);
    document.write(`<p>Education: ${person.education}</p><br>`);
    document.write(`<p>Profession: ${person.profession}</p><br>`);
}

// Example usage:
let population = [];

// Entering records
for (let i = 0; i <= 3; i++) {
    document.write(`<p>Entering record, ${i + 1}</p><br>`);
    population.push(enterRecord());
}

// Displaying records
document.write(`<p>Population Records:</p>`);
population.forEach(person => {
    displayPerson(person);
});