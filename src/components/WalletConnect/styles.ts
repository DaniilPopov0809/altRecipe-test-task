import styled, { css } from 'styled-components';

export const commonStyles = css`
  border: 2px solid blue;
  background-color: white;
  color: blue;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 255, 0.5);
  }
`;

export const Button = styled.button`
  ${commonStyles};
  padding: 10px 20px;
  cursor: pointer;
`;
