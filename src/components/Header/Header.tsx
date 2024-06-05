import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import { useAppContext } from '../../app/AppProvider/AppProvider';
import { WalletConnect } from '../WalletConnect/WalletConnect';
import { BalanceContainer, Span, StyledHeader } from './styles';

export const Header = () => {
  const { balance, wrapBalance } = useAppContext();
  const { isConnected } = useWeb3ModalAccount();
  return (
    <StyledHeader>
      <BalanceContainer>
        {isConnected && (
          <>
            <span>Balance: </span>
            <span><Span>{balance?.slice(0, 5) ?? '0.0'}</Span>SEP</span>
            <span><Span>{wrapBalance?.slice(0, 5) ?? '0.0'}</Span>WSEP</span>
          </>
        )}
      </BalanceContainer>
      <WalletConnect />
    </StyledHeader>
  );
};
