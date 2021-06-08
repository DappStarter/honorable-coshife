require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net property hunt opera bottom slush'; 
let testAccounts = [
"0x438086aea7e11d16f0ed071404e6ab0e5455be91d3cbfe00b2abee8c6a9f8a34",
"0x6290ba2e34a09276593bdb15a868217a16fcbf586ff1dce8b513698f24ccf829",
"0x17d1d9cd861c3864cf289461e8090960c34a0b68745c864e6c16925faa746389",
"0xc688ef55f4a7f81e803de81ba2e95a3d0738571f9de665b497587741a2f462ce",
"0xabe4860e94d6f1fe8595798502ffad03c7a1ac3f656fe8a15aa0e1e54d51fe80",
"0x07411f6af57ae1d44a14659ea22c611026a667e8d047d8278ce585e2a1afb5d3",
"0xc85f30cbf592d24bc471fbd431d8985ab61db2d0e2203f129e1b8b2ff298c408",
"0x2b98de1033aea9f72fbcdb9efda94815c34c130731857190da5c825bcd077798",
"0x0a89ed3042c49b2e93c0bbbcb4090b3e8c219f3f6d9467f30edbe02cb6842b00",
"0x4c523182907d477e34043214544bfe343229d9eb8bd04c5bd9cafc5480c5b161"
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

