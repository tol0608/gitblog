import React, { useEffect } from "react";
import * as styles from "../styles/toc.module.css";

const TableOfContents = ({ content }) => {
    const handleClick = (event) => {
        const target = event.target;
        // 현재 활성화된 TOC 항목을 비활성화
        const activeItem = document.querySelector(`.${styles.activeItem}`);
        if (activeItem) {
            activeItem.classList.remove(styles.activeItem);
        }
        // 클릭한 TOC 항목을 활성화
        target.classList.add(styles.activeItem);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleClick(event);
        }
    };

    useEffect(() => {
        const scrollHandler = () => {
            const toc = document.getElementsByTagName("aside");
            if (!toc || toc.length < 0 || !toc[0] || !toc[0].style || toc[0].offsetWidth === 0) {
                return;
            }

            const anchor_holder = document.getElementsByClassName("anchor-header");
            if (!anchor_holder || anchor_holder.length <= 0) {
                return;
            }
            let selected_anchor = null;
            const anchor_holder_arr = Array.from(anchor_holder);
            for (let a of anchor_holder_arr) {
                if (a.getBoundingClientRect().top > -30) {
                    selected_anchor = a.getAttribute("href");
                    break;
                }
            }
            if (!selected_anchor) {
                selected_anchor = anchor_holder_arr[anchor_holder_arr.length - 1].getAttribute("href");
            }
            document.querySelectorAll("aside a.selected").forEach((a) => {
                a.classList.remove("selected");
            });
            if (selected_anchor) {
                const toc_selected = document.querySelector("aside a[href='" + decodeURIComponent(selected_anchor) + "']");
                toc_selected && toc_selected.classList.add("selected");
            }
        };

        // body에 scroll event listener 추가
        // SSR 에러 방지(typeof document !== "undefined")
        if (typeof document !== "undefined") {
            document.body.addEventListener("scroll", scrollHandler);
        }

        return () => {
            if (typeof document !== "undefined") {
                document.body.removeEventListener("scroll", scrollHandler);
            }
        };
    }, []);

    return (
        <div
            className={styles.toc}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Table of Contents"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default TableOfContents;
