// 2. Accept two inputs from the user and output their sum.

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("enter the First num",(answer1)=>{
    rl.question("enter the Second num",(answer2)=>{
        const num1 = parseFloat(answer1);
        const num2 = parseFloat(answer2);
        const sum  = num1+num2;
        
        console.log(`THE SUM IS ${sum}`)

        rl.close();
    })

  })

