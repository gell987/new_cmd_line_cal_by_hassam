#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let player;
let num1;
let num2;
let checker;
let operatorr;

const sleep = (ms=2000)=> new Promise((r)=> setTimeout(r,ms))
async function greet(){
    const rainboxTitle=chalkAnimation.rainbow(
        "Hassam's calculator\n"
    );
    await sleep();
    rainboxTitle.stop()
    console.log(`
    ${chalk.bgRedBright(`
    how does it work
    im a calculator made from a 14 year old
    you need to give a number in first number and second number
    and thats all :) have a nice day `)}
`)
}



async function first_number(){
    const answer = await inquirer.prompt({
        name : 'first_num',
        type: 'input',
        message: "First number:  ",
        default(){
            return 0
        },
    });
    num1= answer.first_num;

}

async function second_number(){
    const answer = await inquirer.prompt({
        name : 'second_number',
        type: 'input',
        message: "second number:  ",
        default(){
            return 0
        },
    });
    num2= answer.second_number;
}

async function operator(){
    const answers = await inquirer.prompt({
       name: 'operators',
       type:'list',
       message: 'which operator do u want to use: ',
       choices:[
        '/',
        '*',
        '+',
        '-',
        
       ] 
    })
    operatorr=answers.operators
}


function main() {
    num1 = Number(num1)
    num2 = Number(num2)
        var result = caculate(num1, operatorr, num2);
        console.log(result);

}




function caculate(firstNum, operatorrr, secoundNum) {

    switch (operatorrr) {
        case '+':
            return firstNum + secoundNum

        case "-":
            return firstNum - secoundNum


        case "*":
            return firstNum * secoundNum


        case "/":
            return firstNum / secoundNum

    }
}


await greet();
await first_number();
await operator();
await second_number();
await main()