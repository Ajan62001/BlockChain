 const Blockchain = require('./blockchain.js')

 const bitcoin = new Blockchain();
bitcoin.createNewBlock(1225,'dfjghadhjbkgbkbgh','hsdfjaghagjkdfgjkd');
bitcoin.createNewBlock(1226,'dfjgfjghkghadhjbkgbkbgh','sdgfhdfjaghagjkdfgjkd');
bitcoin.createNewBlock(1228,'dghfjghadhjbkgbkbgh','hsdfjaghahdggjkdfgjkd');

bitcoin.createNewTransaction(500,'NAMNNAkjfnfgjnsgdgfa','dbfmadsafddnnjf');
bitcoin.createNewTransaction(1500,'NAMNNAkjfgsdgnfgjna','dbffasdmadsnnjf');
bitcoin.createNewTransaction(5300,'NAMNNdfgdAkjfnfgjna','dbfmadsnnjfsdds');

currentBlockData =  bitcoin.pendingTransactions
 console.log(bitcoin.proofOfWork('gfdhjkhdsgfdsjkgjksh' , currentBlockData));