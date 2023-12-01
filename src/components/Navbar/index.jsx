import FavoriteContext from "../contexts/favoritesContext";
import styles from "./styles.module.css"
import React, { useContext, useEffect, useState } from "react"


const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (

        <nav
            className={styles.nav}
        >
            <div>
                <img
                    alt="Pokoapi logo"
                    className={styles.navbar_logo}
                    src={logoImg} />
                <div className={styles.favorito} >{favoritePokemons.length}❤️</div>

            </div>
            
        </nav>

    )
}
export default Navbar