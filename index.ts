#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to m9rf_currency converter\n"))
//Define the list of currencies and their exchange rates 

let exchange_rate: any = {
    "USD":1, //base currency
    "EUR":0.9, //european currency
    "JYP":113, //japanees currency
    "CAD":1.3, //canadian dollar
    "AUD":1.65, //australian dollar
    "PKR":277.70, //pakistan rupees
}

// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Select the currency to convert from",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert:"
    }
]);

//Perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency]
let to_amount = exchange_rate[user_answer.to_currency]
let amount = user_answer.amount

//Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//Display the converted amount
console.log(`Converted Amount = ${converted_amount}`);