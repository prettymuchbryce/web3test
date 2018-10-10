import Web3 from 'web3';

const infuraUrl = 'wss://mainnet.infura.io/_ws';

const web3 = new Web3(infuraUrl);

web3.eth.subscribe('newBlockHeaders', (error, result) => {
  if (error) {
    console.error('Got error!');
    console.error(error);
  }
  if (result) {
    console.log(result);
  }
});
