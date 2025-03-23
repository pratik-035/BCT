const { Blockchain, Block } = require('./blockchain.js');

let mb = new Blockchain();
console.log("First Transaction");

mb.addBlock(new Block(1, new Date(), 23, 5));
mb.addBlock(new Block(1, new Date(), 121, 4));
mb.addBlock(new Block(1, new Date(), 50, 50));
console.log(JSON.stringify(mb, null, 3));