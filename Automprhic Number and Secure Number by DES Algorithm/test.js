const { Block, Blockchain } = require('./blockchain');

let mb = new Blockchain();

mb.addBlock(new Block(1, new Date(), 5));
mb.addBlock(new Block(2, new Date(), 6));
mb.addBlock(new Block(3, new Date(), 25));



console.log(mb.validate());
console.log(JSON.stringify(mb, null, 3));