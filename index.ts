#! /usr/bin/env node

import inquirer from "inquirer";
import chalk  from "chalk";

const currency: any = {
    USD: 1,  //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.75,
    INR: 74.57,
    PKR: 280
}

let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
        message: chalk.green("Enter From Currency"),
    },
    {
        name: "to",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
        message: chalk.green("Enter To Currency")
    },
    {
        name: "amount",
        type: "number",
        message: chalk.green("Enter Your Amount")
    }
]);

let userFromCurrency = user_answer.from
let userToCurrency = user_answer.to
let fromAmount = currency[userFromCurrency] //exchange rate
let toAmount = currency[userToCurrency] //exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount //USD base currency  //4
let convertedAmount = baseAmount * toAmount
console.log(chalk.red(convertedAmount));