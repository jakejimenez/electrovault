'use strict';
var etnWallet = require('./wallet');
var Wallet = new etnWallet();

// Change DOM
var addressDOM = document.getElementById('address');
Wallet.address().then(function(response){
    addressDOM.innerHTML = response.address;
});
