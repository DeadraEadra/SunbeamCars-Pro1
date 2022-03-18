//Check if the dates are valid
function validDates(arrivaldate, departuredate) {
    const arrival = new Date(arrivaldate);
    const departure = new Date(departuredate);
    if (arrival > departure) {
        return false;
    } else {
        return true;
    }
}

function calculateDays(arrivaldate, departuredate) {
    const arrival = new Date(arrivaldate);
    const departure = new Date(departuredate);
    const timediff = departure.getTime() - arrival.getTime();
    const diffindays = timediff / (1000 * 3600 * 24) + 1;
    return diffindays;
}

function calculatePrice(days, supplement) {

    const priceperday = 100;
    const baseprice = 495;
    const vat = 0.25;
    // const totalprice = priceprday * days;
    const totalprice = (baseprice + (days * priceperday) + (days * supplement)) * (1 + vat);
    return totalprice;
}

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Don't reload page, thank you!
    output.innerHTML = ""; // Removing old search results



    const arrival = document.getElementById("arrivalfield");
    const departure = document.getElementById("departurefield");
    const form = document.getElementById("form");
    const error = document.getElementById("error");
    const price = document.getElementById("price");

    error.innerHTML = "";
    const datesValid = validDates(arrival.value, departure.value);
    if (datesValid) {


        fetch("https://deadraeadra.github.io/SunbeamCars/cars.json")
            .then(function (data) { //wait for the server to respond (promise)
                return data.json();
            })
            .then(function (post) { //If the server responds in a positive way...
                //"Post" is all JSON data
                //If true, price calculation must take place here

                // console.log(arrival, departure)
                showCars(post, arrival.value, departure.value);
            })
        // .catch(function (error) {//If the fetch goes wrong, then...
        //     const output = document.getElementById("output");
        //     output.innerHTML = "Service is unavailable";
        // })
    } else {
        error.innerHTML = "The day of departure must be later than the day of arrival";
    }


    //Filtering cars
    // getting user input from form
    const persons = document.getElementById("persons").value
    const suitcases = document.getElementById("suitcases").value



    function showCars(post, arrival, departure) {

        const output = document.getElementById("output");

        const cars = post; //Make an object list from json data list
        for (const car of cars) {
            // const propertiesofcar = car.properties
            // output.insertAdjacentHTML("beforeend", `${propertiesoftoilet.status}: ${propertiesoftoilet.adresse} ${propertiesoftoilet.by_}<br>`)
            const days = calculateDays(arrival, departure);
            const price = calculatePrice(days, car.supplement);
            // output.innerHTML = `<br><br>Staying for ${days} days.<br>`;
            if (car.persons >= persons && car.suitcases >= suitcases) {
                template = `
                <div class="car-info" id="car-info">
                    <img src="${car.image}" alt="car image" class="carimg"></img>
                       <h3> ${car.name}</h3> 
                        <div class="info">
                            <p>Category: ${car.category} <br></br> Persons: ${car.persons} <br></br> Suitcases: ${car.suitcases} <br></br> Comfort: ${car.comfort}</p>
                        </div>
                    <h3 id="price">DKK ${price}</h3>
                  
                  <a class="book-button" href="page2.html?carname=${car.name}&arrival=${arrival}&departure=${departure}&days=${days}&price=${price}">Book now</a>
                </div><br>`

                output.insertAdjacentHTML("beforeend", template)
            }
        }
    }
})