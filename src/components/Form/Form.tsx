import { useState } from 'react';
import {useWrite } from '../../blockChain/hooks/useWrite';
import { useAppContext } from '../../app/AppProvider/AppProvider';
import { TransactionType } from '../../app/types';
import { Button, ButtonContainer, Input, StyledForm, Title } from './styles';

export const Form = () => {
  const [value, setValue] = useState('');
  const { write: wrap, isLoading: isLoadingWrap } = useWrite(setValue, TransactionType.WRAP);
  const { write: unWrap, isLoading: isLoadingUnWrap } = useWrite(setValue, TransactionType.UNWRAP);
  const { balance, wrapBalance } = useAppContext();

  return (
    <StyledForm>
      <Title>Sepolia exchanger</Title>
      <Input
        type='number'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder='Enter token amount'
      />
      <ButtonContainer>
        <Button type='button' onClick={() => wrap(value, balance)} disabled={value === '' || isLoadingWrap}>
          {isLoadingWrap ? 'Wrapping...' : 'Wrap'}
        </Button>
        <Button type='button' onClick={() => unWrap(value, wrapBalance)} disabled={value === '' || isLoadingUnWrap}>
          {isLoadingUnWrap ? 'Unwrapping...' : 'Unwrap'}
        </Button>
      </ButtonContainer>
    </StyledForm>
  );
};
