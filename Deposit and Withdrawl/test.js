const { Blockchain, Block } = require('./blockchain') 
 
let mb; 
console.log("Developed by Mihir Nagda - 31031523016") 
 
const readline = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
 
async function main() { 
    mb = new Blockchain(); 
    let i = 1; 
    while (true) { 
        const DW = await new Promise(resolve => { 
            readline.question('Type D - Deposit, W - Withdraw or Any Other Charcter - Exit: ', resolve); 
        }); 
 
        if (DW.toUpperCase() !== 'D' && DW.toUpperCase() !== 'W') { 
            console.log('Exiting...'); 
            break; 
        } 
 
        const m = await new Promise(resolve => { 
            readline.question('Enter Amount: ', resolve); 
        }); 
 
        mb.addBlock(new Block(i, new Date(), DW, parseInt(m))); 
        console.log(JSON.stringify(mb, null, 3)); 
        i++;
    } 

    readline.close(); 

} 


main(); 