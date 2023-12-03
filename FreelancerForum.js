// sets array of current freelancers
let currentFLs = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    ];

// sets array of the freelancer backlog
let backLogFLs = [ 
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

// creates important variables for later
let newPriceSum;
let newPriceAvg;
let avgPrint;
let entryPrint;
let addPrint;
let amountOfNew = 0;
let body;

// this function prints initial freelancers and average price at top
function initialPrint(initialInfo) {

    // calculates initial average price
    newPriceSum = initialInfo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);
    newPriceAvg = Math.round(newPriceSum/(initialInfo.length));

    // prints initial average price
    body = document.querySelector("body");
    avgPrint = document.createElement("h1");
    avgPrint.setAttribute("id", "average");
    avgPrint.textContent = "Average Price: " + newPriceAvg;
    body.append(avgPrint);

    // prints initial freelancers in string form
    initialInfo.forEach((entry) => {
        entryPrint = document.createElement("h1");
        entryPrint.textContent = "Name: " + entry.name + "_____Price: " + entry.price + "_____Occupation: " + entry.occupation;
        body.append(entryPrint);
    });
  
}

/* this function grabs a random freelancer from the backlog and prints
it out, while also updating the average price */
function generateAndPrint(initial, bank) {

    /* grabs random freelancer from backlog and removes it from backlog
    after it is stored in a variable */
    const randIndex = Math.round(Math.random() * (bank.length - 1));
    const newFL = bank[randIndex];
    bank.splice(randIndex, 1);

    /* remembers how many new freelancers have been added so it can
    increase the divisor when calculating the average */
    amountOfNew++;

    // calculates new average price
    newPriceSum = newPriceSum + newFL.price;
    newPriceAvg = Math.round(newPriceSum/(initial.length + amountOfNew));

    // updates average price on screen
    avgPrint.textContent = "Average Price: " + newPriceAvg;

    // prints new freelancer below list in string form
    body = document.querySelector("body");
    addPrint = document.createElement("h1");
    addPrint.textContent = "Name: " + newFL.name + "_____Price: " + newFL.price + "_____Occupation: " + newFL.occupation;
    body.append(addPrint);
}


// still need final code where functions are called

initialPrint(currentFLs);
generateAndPrint(currentFLs, backLogFLs);

