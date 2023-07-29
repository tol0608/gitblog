import * as React from "react";
import { Link } from "gatsby";
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import useTheme from '../hooks/useTheme';


const ThemeToggleButton = styled.button`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.fontColor};
  background-color: ${({ theme }) => theme.color.backgroundColor};
`;

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;
    let header;
    const [theme, themeToggler] = useTheme();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
            <div className="global-wrapper" data-is-root-path={isRootPath}>
                <header className="global-header">{header}</header>
                <ThemeToggleButton onClick={themeToggler}>
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </ThemeToggleButton>
                <main>{children}</main>
                <footer>
                    {new Date().getFullYear()} 년에는 웃는일이 가득하면 좋겠습니다 🙂
                    {` `}
                </footer>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
