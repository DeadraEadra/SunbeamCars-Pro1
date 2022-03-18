// Get and show TOTAL PRICE to user
totaloutput.insertAdjacentHTML("beforeend", `Total ${sessionStorage.getItem("total")} <br>`);

// Get and show CAR NAME
nameoutput.insertAdjacentHTML("beforeend", `${sessionStorage.getItem("carname")} <br>`);

// Get and show DATES
datesoutput.insertAdjacentHTML("beforeend", `Pickup date: ${sessionStorage.getItem("arrival")} <br> Return date: ${sessionStorage.getItem("departure")} <br> Rental days: ${sessionStorage.getItem("days")} <br>`);

// Get and display TOTAL RENTAL COST
priceoutput.insertAdjacentHTML("beforeend", `Total car rental cost ${sessionStorage.getItem("price")}`);

// const output = document.getElementById("output");

// Get ACCESSORY LIST from sesstionstorage
const accessorylist = JSON.parse(sessionStorage.getItem("accessories"));

// Show every item on accessory list to user
for (const item of accessorylist) {
    output.insertAdjacentHTML("beforeend", `<li>${item}`);
}

// Accessories TOTAL COST output
accessoriesoutput.insertAdjacentHTML("beforeend", `Total accessories cost: ${sessionStorage.getItem("accesoriesTotal")}`);

// Get items
sessionStorage.getItem("accessories");
sessionStorage.getItem("total");
sessionStorage.getItem("carname");
sessionStorage.getItem("arrival");
sessionStorage.getItem("departure");
sessionStorage.getItem("days");
sessionStorage.getItem("price");

const formoutput = document.getElementById("formoutput");
const name = sessionStorage.getItem("first-name");
const surname = sessionStorage.getItem("last-name");
const street = sessionStorage.getItem("street-name");
const floor = sessionStorage.getItem("number-floor");
const postal = sessionStorage.getItem("postal-code");
const adult = sessionStorage.getItem("adult");

formoutput.innerHTML = "<p>First name: " + name + " <br>Last name: " + surname + " <br>Address: " + street + floor + " <br>Postal code and city: " + postal + "</p>";