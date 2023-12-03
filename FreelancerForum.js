let currentFLs = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    ];


let backLogFLs = [ 
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

let newPriceSum = 0;
let newPriceAvg = 0;

function initialPrint(initialInfo) {

    newPriceSum = initialInfo.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);

    newPriceAvg = newPriceSum/(initialInfo.length);

    const body = document.querySelector("body");
    let avgPrint;
    let entryPrint;

    avgPrint = document.createElement("h1");
    avgPrint.setAttribute("id", "average");
    avgPrint.textContent = "Average Price: " + newPriceAvg;
    body.append(avgPrint);

    initialInfo.forEach((entry) => {
        entryPrint = document.createElement("h1");
        entryPrint.textContent = "Name: " + entry.name + "  Price: " + entry.price + "  Occupation: " + entry.occupation;
        body.append(entryPrint);
    });
  
}

function generateAndPrint(initial, bank) {
    const randIndex = Math.round(Math.random() * (bank.length - 1));
    const newFL = bank[randIndex];
    bank.splice(randIndex, 1);

    newPriceSum = newPriceSum + newFL.price;

    newPriceAvg = newPriceSum/(initial.length);

    // still need to update HTML so that average shows up

    const body = document.querySelector("body");
    let addPrint = document.createElement("h1");
    addPrint.textContent = "Name: " + newFL.name + "  Price: " + newFL.price + "  Occupation: " + newFL.occupation;
    body.append(addPrint);
}


// still need final code where functions are called

