var bitcore = require("bitcore-explorers/node_modules/bitcore-lib");
var privateKeyWIF = "cTbZFhTiSScZ6dsCm6nepsYBYJc5A17u22EfBQ5RUaYisJk1c5eF";

var privateKey = bitcore.PrivateKey.fromWIF(privateKeyWIF);
var address = privateKey.toAddress().toString();

console.log("address: ", address);

var value = new Buffer.from(
  "this is a way to generate an address from a string--risky--not random--guessable!!!"
);

var hash = bitcore.crypto.Hash.sha256(value);
var bn = bitcore.crypto.BN.fromBuffer(hash);
var address2 = new bitcore.PrivateKey(bn, "testnet").toAddress().toString();
console.log("address 2: ", address2);

var Insight = require("bitcore-explorers").Insight;
var insight = new Insight("testnet");

insight.getUnspentUtxos(address, function (err, utxos) {
  if (err) {
  } else {
    console.log(utxos);
  }
});
