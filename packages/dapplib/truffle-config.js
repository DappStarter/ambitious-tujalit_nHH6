require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile purse install fantasy force squirrel'; 
let testAccounts = [
"0x9d5cb71c334609d31d127400199e9e59aee0adbca02b9190f6f23c840656019a",
"0x179d97ef1feb3f9535d758162b1f6093817e4b030379613dcb1546f676736fb9",
"0x7089b46755ae2913b700d1f657d470b0b2077d4f98020d014b1c35595e81f2c6",
"0x8bc0552f3186c6bee8f90aad0cc9ca8192b725f085c81791c86010e6f9b5eca6",
"0x4ae32d6e4bc4f68dfaafcd7cf707bd17d6536b82c1bb3d3354b05d10a0b4fac6",
"0x559a8371eefa17df946e239f31ad4cf3b12da0d4fa4a076d04553ae920ab8228",
"0x518a80659e355cdd714c96bc3abf6a924a9e3af3c0b87bd160c4ca2594894153",
"0x017a9869f9f7775ea55a88089562fb0796c99730e2a919de2e803b25f5e7d934",
"0x2872c6eff8ec1658cfb77767661ae4c652076280578e46af84606c55695e8660",
"0x2662374d793da88c92041f01565e640b378c8546dc57a770e7f4af956e1acde3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

