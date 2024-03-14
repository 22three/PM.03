const BitcoreMnemonic = require('bitcore-mnemonic');
const Web3 = require('web3');

// Создаем мнемоническую фразу
const mnemonic = new BitcoreMnemonic();

// Генерируем приватный ключ из мнемонической фразы
const privateKey = mnemonic.toPrivateKey();

// Создаем экземпляр web3 и подключаемся к узлу Ethereum
const web3 = new Web3('http://localhost:8545');

// Получаем адрес кошелька из приватного ключа
const address = web3.eth.accounts.privateKeyToAccount(privateKey).address;

// Проверяем баланс кошелька
web3.eth.getBalance(address, (err, balance) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Mnemonic:', mnemonic.toString());
  console.log('Private Key:', privateKey.toString());
  console.log('Address:', address);
  console.log('Balance:', web3.utils.fromWei(balance, 'ether'));
});
