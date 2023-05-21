// https://eth-goerli.g.alchemy.com/v2/X2RXllP-CNOe72hcSmhwUzWtG2UuX5FA

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/X2RXllP-CNOe72hcSmhwUzWtG2UuX5FA',
      accounts: ['635cb34f90623d689b343d089785f1bac5a2bbc02b6e726ef4c9d5ced2febb83']
    }
  }
}