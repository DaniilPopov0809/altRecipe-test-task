import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

export const useConfig = () => {
  const projectId = process.env.REACT_APP_WALLET_CONNECT_ID ?? '';

  const sepolia = {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'SEP',
    explorerUrl: 'https://sepolia.etherscan.io/',
    rpcUrl: 'https://1rpc.io/sepolia'
  };

  const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com',
    icons: ['https://avatars.mywebsite.com/']
  };

  const ethersConfig = defaultConfig({
    metadata
  });

  createWeb3Modal({
    ethersConfig,
    chains: [sepolia],
    projectId,
    enableAnalytics: true
  });
};
