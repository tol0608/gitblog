import React from "react"
import * as styles from "../styles/toc.module.css"

const TableOfContents = ({ content }) => {
    return (
        <div
            className={styles["toc"]}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}

export default TableOfContents
