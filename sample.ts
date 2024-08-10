
import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('what is you name?',(answer)=>{
    console.log(`hello, ${answer}`)
    rl.close();
  })