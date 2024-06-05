import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react';
import { shortAddress } from '../../app/utils/shortAddress';
import { Button } from './styles';

export const WalletConnect = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  return <Button onClick={() => open()}>{isConnected ? shortAddress(address ?? '') : 'Connect Wallet'}</Button>;
};
