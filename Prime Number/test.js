
const { Block, Blockchain } = require('./blockchai')

let mb = new Blockchain();

mb.addBlock(3);
mb.addBlock(4);
mb.addBlock(5);
mb.addBlock(10);

console.log("Chain Valid : ", mb.isChainValid());
console.log(JSON.stringify(mb, null, 3));