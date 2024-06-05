import { useState } from 'react';
import { useWrap } from '../../blockChain/hooks/useWrap';
import { useUnWrap } from '../../blockChain/hooks/useUnWrap';
import { useAppContext } from '../../app/AppProvider/AppProvider';
import { Button, ButtonContainer, Input, StyledForm, Title } from './styles';

export const Form = () => {
  const [value, setValue] = useState('');
  const { wrap, isLoading: isLoadingWrap } = useWrap(setValue);
  const { unWrap, isLoading: isLoadingUnWrap } = useUnWrap(setValue);
  const { balance, wrapBalance } = useAppContext();

  return (
    <StyledForm>
      <Title>Exchanger sepolia</Title>
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
