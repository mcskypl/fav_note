import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border: 0; 
  width: 220px;
  height: 47px;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  
  ${({ secondary }) => (
    secondary && css`
        background-color: hsl(0, 0%, 90%);
        width: 105px;
        height: 30px;
        font-size: 10px;
      `
  )};
`;

export default Button;
