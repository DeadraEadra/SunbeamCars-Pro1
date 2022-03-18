fetch("https://dawa.aws.dk/postnumre") //Fetching from the internet website
  .then(function (data) { //waiting for the server to respond
    return data.json();
  })
  .then(function (post) { //If the server responds in a positive way
    //"Post" is all JSON data
    const datalist = document.getElementById("codelist")
    const listofcities = post;

    for (city of listofcities) { //Insert the data into div
      datalist.insertAdjacentHTML("beforeend", `<option>${city.nr} ${city.navn}</option>`)
    }
  })
  .catch(function (error) {//If the fetch goes wrong, then...
    const output = document.getElementById("output1");
    output.innerHTML = "Service is unavailable";
  })


// Get and show TOTAL PRICE to user
totaloutput.insertAdjacentHTML("beforeend", `Total ${sessionStorage.getItem("total")} <br>`);

// Get and show CAR NAME
nameoutput.insertAdjacentHTML("beforeend", `${sessionStorage.getItem("carname")} <br>`);

// Get and show DATES
datesoutput.insertAdjacentHTML("beforeend", `Pickup date: ${sessionStorage.getItem("arrival")} <br> Return date: ${sessionStorage.getItem("departure")} <br> Rental days: ${sessionStorage.getItem("days")} <br>`);

// Get and display TOTAL RENTAL COST
priceoutput.insertAdjacentHTML("beforeend", `Total car rental cost ${sessionStorage.getItem("price")}`);

const output = document.getElementById("output");

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


// FORM //
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("first-name").value;
  const surname = document.getElementById("last-name").value;
  const street = document.getElementById("street-name").value;
  const floor = document.getElementById("number-floor").value;
  const postal = document.getElementById("postal-code").value;
  const adult = document.getElementById("adult").value;

  sessionStorage.setItem("first-name", name);
  sessionStorage.setItem("last-name", surname);
  sessionStorage.setItem("street-name", street);
  sessionStorage.setItem("number-floor", floor);
  sessionStorage.setItem("postal-code", postal);
  sessionStorage.setItem("adult", adult);

  location.href = "page4-receipt.html";
})