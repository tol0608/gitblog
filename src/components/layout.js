import * as React from "react";
import {Link} from "gatsby";
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from '../styles/theme';
import useTheme from '../hooks/useTheme';
import {createGlobalStyle} from 'styled-components';

const ThemeToggleButton = styled.button`
  color: ${({theme}) => theme.toggleButtonColor};
  background-color: ${({theme}) => theme.toggleButtonBackground};

  &:hover {
    color: ${({theme}) => theme.toggleButtonHoverColor};
    background-color: ${({theme}) => theme.toggleButtonHoverBackground};
  }
`;

const GlobalStyles = createGlobalStyle`
  body {
    color: ${({theme}) => theme.fontColor};
    background-color: ${({theme}) => theme.bodyBackground};
  }

  .blog-post header h1 {
    color: ${({theme}) => theme.titleColor};
  }

  .post-list-item h2, h2, h3, h4, h5 {
    color: ${({theme}) => theme.linkTitleColor};
  }

  .bio h6 {
    color: ${({theme}) => theme.bioColor};
  }

  .bio h6 span {
    color: ${({theme}) => theme.bioSpanColor};
    background-color: ${({theme}) => theme.bioBackground};
  }
`;

const Layout = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;
    const [theme, themeToggle] = useTheme();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    let header;
    if (isRootPath) {
        header = (
            <h1 className="main-heading">
                <Link to="/" style={{color: themeMode.titleColor}}>{title}</Link>
            </h1>
        );
    } else {
        header = (
            <Link className="header-link-home" to="/" style={{color: themeMode.titleColor}}>
                {title}
            </Link>
        );
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles/>
            <div className={`global-wrapper ${theme}`}>
                <header className="global-header">{header}</header>
                <ThemeToggleButton onClick={themeToggle} className="themeToggle-btn">
                    {theme === 'light' ? '다크 모드 🌙' : '라이트 모드 ☀️'}
                </ThemeToggleButton>
                <main>{children}</main>
                <footer>
                    {new Date().getFullYear()} 년에는 웃는일이 가득하면 좋겠습니다 🙂
                </footer>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
