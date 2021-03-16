 const BlockChain = require('./blockChain_Practice.js')

 const bitcoin = new BlockChain();
bitcoin.createNewBlock(1225,'dfjghadhjbkgbkbgh','hsdfjaghagjkdfgjkd');
bitcoin.createNewTransaction(100 , 'SDLFSFSJFDSJGSJLGJS0' , 'AJDOSAGJOAGJAJDGA');
let blockData = bitcoin.pendingTransactions;
 console.log(bitcoin.proofOfWork('SADNJLGNASJGNJLBG' , blockData ));