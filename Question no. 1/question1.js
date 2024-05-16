document.write(`<h1>Suppose You have an array of object 
var itemsArray = [ <br>
{name:”juice”,price:”50”, quantity:”3”}, <br>
{name:”cookie”,price:”30”, quantity:”9”}, <br>
{name:”shirt”,price:”880”, quantity:”1”}, <br>
{name:”pen”,price:”100”, quantity:”2”}]; <br>
Calculate total price of each item and all items; <br>
</h1>`)

var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

// Function to calculate total price of each item and all items
function calculateTotalPrice(itemsArray) {
    let totalPriceAllItems = 0;

    // Iterate over each item
    itemsArray.forEach(item => {
        let totalPricePerItem = item.price * item.quantity;
        document.write(`<h3>Total price of ${item.name}: ${totalPricePerItem}</h3><br>`);
        totalPriceAllItems += totalPricePerItem;
    });

    document.write(`<h3>Total price of all items: ${totalPriceAllItems}</h3>`);
}

// Call the function to calculate total prices
calculateTotalPrice(itemsArray);