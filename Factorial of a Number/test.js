const { Blockchain, Block } = require('./blockhain');

let mb = new Blockchain();

mb.addBlock(new Block(1, new Date(), 5));
mb.addBlock(new Block(2, new Date(), 15));

console.log(JSON.stringify(mb, null, 2));