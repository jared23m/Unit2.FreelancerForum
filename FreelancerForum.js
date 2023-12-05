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
let body;
let myInterval;

// this function calculates the average price of a set of objects
function avgCalc(setOfObj) {
    newPriceSum = setOfObj.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);

    return Math.round(newPriceSum/(setOfObj.length));
}

// this function prints initial freelancers and average price at top
function initialPrint(initialInfo) {

    /* this var assignment has to be in here because I want to have
    a global var for later, the way I set things up for my code*/
    newPriceAvg = avgCalc(initialInfo);

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

    // this pushes the new freelancer into the initial array
    initial.push(newFL);

    // calculates new average price
    newPriceSum = newPriceSum + newFL.price;
    newPriceAvg = Math.round(newPriceSum/(initial.length));

    // updates average price on screen
    avgPrint.textContent = "Average Price: " + newPriceAvg;

    // prints new freelancer below list in string form
    body = document.querySelector("body");
    addPrint = document.createElement("h1");
    addPrint.textContent = "Name: " + newFL.name + "_____Price: " + newFL.price + "_____Occupation: " + newFL.occupation;
    body.append(addPrint);
}

// this function stops the eventual interval if the backlog is empty
function generateAndPrintOverTime(currentOT, backLogOT) {
    if (backLogOT) {
        generateAndPrint(currentOT, backLogOT);
    } else {
        clearInterval(myInterval);
    }
}

//final code where functions are called
initialPrint(currentFLs);
myInterval = setInterval(generateAndPrintOverTime, 2000, currentFLs, backLogFLs);
