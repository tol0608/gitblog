import * as React from "react";
import {Link} from "gatsby";
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from '../styles/theme';
import useTheme from '../hooks/useTheme';

import {createGlobalStyle} from 'styled-components';


const ThemeToggleButton = styled.button`
  width: 200px;
  height: 60px;
  margin-top: 16px;
  color: ${({theme}) => theme.fontColor};
  background-color: ${({theme}) => theme.backgroundColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({theme}) => theme.toggleButtonHoverBackground};
    color: ${({theme}) => theme.toggleButtonHoverColor};
  }
`;

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.bodyBackground};
    color: ${({theme}) => theme.fontColor};
  }
`;

const Layout = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;

    const [theme, themeToggler] = useTheme();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    let header;
    if (isRootPath) {
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        );
    } else {
        header = (
            <Link className="header-link-home" to="/">
                {title}
            </Link>
        );
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles/>
            <div className={`global-wrapper ${theme}`}>
                <header className="global-header">{header}</header>
                <main>{children}</main>
                <footer>
                    {new Date().getFullYear()} 년에는 웃는일이 가득하면 좋겠습니다 🙂
                </footer>
                <ThemeToggleButton onClick={themeToggler}>
                    {theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
                </ThemeToggleButton>
            </div>
        </ThemeProvider>
    );
};


export default Layout;
