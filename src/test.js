var etnWallet = require('./lib/wallet');
var Wallet = new etnWallet();

Wallet.address().then(function(response){
    console.log(response);
});

Wallet.balance().then(function(balance) {
    console.log(balance);
});

Wallet.height().then(function(height) {
    console.log(height);
});
