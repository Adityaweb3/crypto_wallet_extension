const Ethereum = {
    hex: '0x1',
    name: 'Ethereum',
    rpcUrl: 'https://mainnet.infura.io/v3/7351aa9731464a5ab4ff2bcd8701c450',
    ticker: "ETH"
};

const MumbaiTestnet = {
    hex: '0x13881',
    name: 'Mumbai Testnet',
    rpcUrl: 'https://polygon-mumbai.blockpi.network/v1/rpc/public',
    ticker: "MATIC"
};

export const CHAINS_CONFIG = {
    "0x1": Ethereum,
    "0x13881": MumbaiTestnet,
};