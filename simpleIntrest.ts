// 3. Write a program to find the simple interest.

import * as readline from 'readline'

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("enter the principle Amount",(principle)=>{
    r1.question("enter the Rate",(rate)=>{
        r1.question("time Period",(n)=>{
           const  p = parseFloat(principle)
           const  r = parseFloat(rate)
           const  time = parseFloat(n)
           const SI :number = ((p*r*time)/100);
           console.log("simple Intrest is", SI)
            r1.close()
        })
    })
} )

