// Copy the JSON from cars.json and assign it to a variable in a new application. 
// This data holds sales information for a car dealership. Your job is to produce the following 
// reports for the dealership based on their total 2017 sales.



// Total profit for 2017

let totalProfit = 0;
carDealership.forEach(car => {
    if (car.vehicle.year === 2017)
        totalProfit += car.gross_profit
});
console.log(totalProfit)

// In which month did they sell the most cars?
const months = {}
carDealership.forEach(deal => {
    if (months.hasOwnProperty(deal.purchase_date.split("-")[1]))
        months[deal.purchase_date.split("-")[1]]++
    else
        months[deal.purchase_date.split("-")[1]] = 1
});
const maxSalesMonth = Object.keys(months).reduce((a,b) => months[a] > months[b]? a: b)
console.log(months, maxSalesMonth)

// Which salesperson sold the most cars?

// Which salesperson made the most profit?

const dealersData = {}
carDealership.forEach(deal => {
    if (dealersData.hasOwnProperty(deal.sales_agent.last_name)) {
        dealersData[deal.sales_agent.last_name]["numberOfSales"]++
        dealersData[deal.sales_agent.last_name]["profit"] += deal.gross_profit
    }
    else {
        dealersData[deal.sales_agent.last_name] = {
            "numberOfSales": 1,
            "profit": deal.gross_profit
        }
    }
});

const maxSales = Object.keys(dealersData)
    .reduce((a, b) => (dealersData[a]["numberOfSales"] > dealersData[b]["numberOfSales"]) ? a : b)
const maxProfit = Object.keys(dealersData)
    .reduce((a, b) => (dealersData[a]["profit"] > dealersData[b]["profit"]) ? a : b)
console.log(dealersData, maxSales, maxProfit)

// Which model was the most popular?
const carModels = {}
carDealership.forEach(deal => {
    if (carModels.hasOwnProperty(deal.sales_agent.last_name))
        carModels[deal.vehicle.model]++
    else
        carModels[deal.vehicle.model] = 1
});
const popularCarModel = Object.keys(carModels).reduce((a, b) => (carModels[a] > carModels[b]) ? a : b)
console.log(carModels, popularCarModel)

// Which bank provided the most loans to our customers?

const bankData = {}
carDealership.forEach(deal => {
    if (bankData.hasOwnProperty(deal.credit.credit_provider))
        bankData[deal.credit.credit_provider]++
    else
        bankData[deal.credit.credit_provider] = 1
});
const maximumLoan = Object.keys(bankData).reduce((a, b) => bankData[a] > bankData[b] ? a : b)

console.log(bankData, maximumLoan)

//Adding results to DOM
const $ = document.querySelector.bind(document)
$("#reports").innerHTML += `<h2> Reports of Car Dealership </h2> 
        Total profit for 2017 : <strong>$${totalProfit}</strong>
        <hr/> Car sale most in the month : <strong>${maxSalesMonth} </strong>
        <hr/> Salesperson sold the most cars : <strong>${maxSales}</strong> 
        <hr/> Salesperson made the most profit : <strong>${maxProfit}</strong>
        <hr/> Model which was the most popular : <strong>${popularCarModel}</strong>
        <hr/> Bank which provided the most loans to our customers : <strong>${maximumLoan}</strong>`


