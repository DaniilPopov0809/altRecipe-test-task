import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { BrowserProvider, Contract, parseUnits } from 'ethers';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppContext } from '../../app/AppProvider/AppProvider';
import ABI from '../abi.json';
import { TOKEN_WRAP_ADDRESS } from '../constant';

export const useUnWrap = (setValue: Dispatch<SetStateAction<string>>) => {
  const { isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const { getBalance } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const unWrap = async (amount: string, balance: string) => {
    try {
      if (!isConnected) throw Error('User disconnected');
      if (!walletProvider) throw Error('Provider not found');
      if (balance < amount) {
        toast.error('Not enough funds');
        return;
      }

      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();

      const WSEPContract = new Contract(TOKEN_WRAP_ADDRESS, ABI, signer);
      setIsLoading(true);
      setError('');
      setSuccess(false);
      const formattedAmount = parseUnits(amount, 18);
      const transaction = await WSEPContract.withdraw(formattedAmount);
      await transaction.wait();
      setIsLoading(false);
      setSuccess(true);
      await getBalance();
    } catch (error) {
      setIsLoading(false);
      setSuccess(false);
      const errorMessage = (error as Error).message;
      //@ts-expect-error: types not described
      if (error?.info?.error?.code === 4001) {
        setError('User reject transaction');
        return;
      }
      setError(errorMessage);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      return;
    }
    if (isSuccess) {
      setValue('');
      toast.success('Operation successful!');
      return;
    }
  }, [error, isSuccess]);

  return { unWrap, isLoading, error, isSuccess };
};
