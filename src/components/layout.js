import * as React from "react"
import {Link} from "gatsby"

const Layout = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header

    if (isRootPath) {
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        )
    } else {
        header = (
            <Link className="header-link-home" to="/">
                {title}
            </Link>
        )
    }

    return (
        <div className="global-wrapper" data-is-root-path={isRootPath}>
            <header className="global-header">{header}</header>
            <main>{children}</main>
            <footer>
                {new Date().getFullYear()} 년에는 웃는일이 가득하면 좋겠습니다 🙂
                {` `}
            </footer>
        </div>
    )
}

export default Layout
