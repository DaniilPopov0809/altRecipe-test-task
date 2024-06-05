import styled from 'styled-components';
import { commonStyles } from '../WalletConnect/styles';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid blue;
  border-radius: 10px;
  width: 400px;
`;

export const Input = styled.input`
  border: 2px solid blue;
  background-color: white;
  color: blue;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 255, 0.5);
  }

  ::placeholder {
  color: grey;
}
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  button {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`;

export const Button = styled.button`
  ${commonStyles}
  cursor: pointer;
  padding: 10px 20px;

  &:disabled {
    color: gray;
    border-color: gray;
    &:hover {
      box-shadow: none;
    }
  }
`;