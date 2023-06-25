import React from "react"
import * as styles from "../styles/toc.module.css"

const TableOfContents = ({ content }) => {
    const handleClick = (event) => {
        const target = event.target;
        // 현재 활성화된 TOC 항목을 비활성화
        const activeItem = document.querySelector(`.${styles.activeItem_hashedString}`);
        if (activeItem) {
            activeItem.classList.remove(styles.activeItem_hashedString);
        }
        // 클릭한 TOC 항목을 활성화
        target.classList.add(styles.activeItem_hashedString);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick(event);
        }
    };

    return (
        <div
            className={styles["toc"]}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Table of Contents"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}

export default TableOfContents