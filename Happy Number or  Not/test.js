const { Block, Blockchain} = require('./blockchain');

let mb = new Blockchain();

mb.addBlock(new Block(1, new Date(), 10));
mb.addBlock(new Block(2, new Date(), 15));
mb.addBlock(new Block(3, new Date(), 4));
console.log(JSON.stringify(mb, null, 4))