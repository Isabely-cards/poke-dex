import React from "react";
import styles from "../Pagination/styles.module.css"

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className={styles.pagination_container}>
            <button onClick={onLeftClick}>
                <div className={styles.arrow}>◀️</div>
            </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>
                <div className={styles.arrow}>▶️</div>
            </button>
        </div>
    )
}

export default Pagination;