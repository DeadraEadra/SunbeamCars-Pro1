//After the cards are sorted, you choose the car by pressing the button "Book now"
const url = window.location.search
const urldata = new URLSearchParams(url)
const carname = urldata.get("carname")
const arrival = urldata.get("arrival")
const departure = urldata.get("departure")
const days = urldata.get("days")
const price = parseFloat(urldata.get("price"))


let template = `
<p>${price}</p>
<p>${carname}</p>
<p>Pick up on:${arrival}</p>
<p>Return on:${departure}</p>
<p>Amount of days:${days}</p>

`

const output = document.getElementById("info-output");
output.insertAdjacentHTML("beforeend", template);




//ACCESORIES SECTION

let total = price; // Global variable, total starts at zero
showTotal(); // Calls function showTotal to show current total

// Event handler - check if checkbox is selected or not and 
// adjust the total value accordingly
function calculateTotal(checkbox, itemprice) {
    if (checkbox.checked === true) { // If the checkbox is seleted then ...
        total = Math.abs(total + parseFloat(itemprice) * 1.25);
    } else { // if it is not selected then ...
        total = Math.abs(total - parseFloat(itemprice) * 1.25);
    }
    showTotal();
}

// Shows total value on screen
function showTotal() {
    const output = document.getElementById("totaloutput");
    output.innerText = `Total ${total.toLocaleString("da-DK", { style: "currency", currency: "DKK" })}`;
}

const form = document.getElementById("accessories-form");

const checkboxes = document.getElementsByClassName("slist"); //Build an object list with checkboxes
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let accessorylist = []; // Define shopping list
    for (const checkbox of checkboxes) {
        if (checkbox.checked === true) { // If the item is selected ...
            accessorylist.push(checkbox.dataset.item + "(dkr. " + checkbox.value + ")"); // add it to the shopping list.
        }
    }

    // Stores information in sessionstorage
    sessionStorage.setItem("accessories", JSON.stringify(accessorylist));
    sessionStorage.setItem("total", total.toLocaleString("da-DK", { style: "currency", currency: "DKK" }));

    sessionStorage.setItem("accesoriesTotal", total - price)

    sessionStorage.setItem("carname", carname);
    sessionStorage.setItem("arrival", arrival);
    sessionStorage.setItem("departure", departure);
    sessionStorage.setItem("days", days);
    sessionStorage.setItem("price", price);

    location.href = "page3.html"; // Redirect user to page3.html
})