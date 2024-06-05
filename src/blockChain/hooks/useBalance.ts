import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { AddressLike, BrowserProvider, Contract, formatUnits } from 'ethers';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { TOKEN_WRAP_ADDRESS } from '../constant';
import ABI from '../abi.json';

export const useBalance = (
  setBalance: Dispatch<SetStateAction<string>>,
  setWrapBalance: Dispatch<SetStateAction<string>>
) => {
  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  useEffect(() => {
    if (isConnected && walletProvider) {
      getBalance();
    }
  }, [isConnected, walletProvider]);

  const getBalance = async () => {
    try {
      if (!isConnected) throw Error('User disconnected');
      if (!walletProvider) throw Error('Provider not found');

      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const balance = await ethersProvider.getBalance(address as AddressLike);

      setBalance(formatUnits(balance, 18))
      const WSEPContract = new Contract(TOKEN_WRAP_ADDRESS, ABI, signer);
      const WSEPBalance = await WSEPContract.balanceOf(address);

      setWrapBalance(formatUnits(WSEPBalance, 18));
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error('🚀 ~ getBalance ~ errorMessage:', errorMessage);
    }
  };

  return { getBalance };
};
