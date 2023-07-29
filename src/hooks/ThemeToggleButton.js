import styled from 'styled-components';

const ThemeToggleButton = styled.button`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default ThemeToggleButton;
