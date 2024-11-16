"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];


//an array of regions to be able to iterate over each region
const regions = [region1, region2, region3, region4, region5];

//an array to be iterate through the totals of each quarter and input them in the loop
let quarterTotals = [0, 0, 0, 0];

// Outer loop: Iterate over each region
for (let i = 0; i < regions.length; i++) {
    for (let j = 0; j < regions[i].length; j++) {
        quarterTotals[j] += regions[i][j];
    }
}

//an array to be iterate through the totals of each region and input them in the loop
let regionTotals = [0, 0, 0, 0, 0]

for(let i = 0; i < regions.length; i++){
    for(let j = 0; j < regions[i].length; j++){
        regionTotals[i] += regions[i][j]
    }
}


let totalSales = 0

//loop to add the total region totals to get the total sales
for(let i = 0; i < regionTotals.length; i++){
    totalSales += regionTotals[i]
}

document.write("<h2>Sales by Quarter</h2><br>")
document.write(`<p>Q1: $${quarterTotals[0]}</p><br>`)
document.write(`<p>Q2: $${quarterTotals[1]}</p><br>`)
document.write(`<p>Q3: $${quarterTotals[2]}</p><br>`)
document.write(`<p>Q4: $${quarterTotals[3]}</p><br>`)
document.write("<h2>Sales by Region</h2></br>")
document.write(`<p>Region 1: $${regionTotals[0]}</p><br>`)
document.write(`<p>Region 2: $${regionTotals[1]}</p><br>`)
document.write(`<p>Region 3: $${regionTotals[2]}</p><br>`)
document.write(`<p>Region 4: $${regionTotals[3]}</p><br>`)
document.write(`<p>Region 5: $${regionTotals[4]}</p><br>`)
document.write("<h2>Total Sales</h2></br>")
document.write(`<p>$${totalSales}</p>`)