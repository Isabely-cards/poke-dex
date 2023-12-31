import React, {useState} from "react";
import styles from "./styles.module.css"

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const {onSearch} = props

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search.toLowerCase())
    }
    return (
        <div className={styles.searchbar_container}>
            <div className={styles.searchbar}>
                <input type="text" placeholder="Buscar pokemon" onChange={onChangeHandler} />
            </div>

            <div className={styles.search_btn}>
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
        
    )
}

export default Searchbar