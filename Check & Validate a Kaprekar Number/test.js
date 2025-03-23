const { Block, Blockchain } = require('./blockchain.js')

let mb = new Blockchain();

mb.addBlock(new Block(1, new Date(), 45));
mb.addBlock(new Block(2, new Date(), 19));
mb.addBlock(new Block(3, new Date(), 297));
console.log("Chain Valid : ", mb.validate());

console.log(JSON.stringify(mb, null, 3));