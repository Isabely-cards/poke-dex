import FavoriteContext from "../contexts/favoritesContext";
import styles from "./styles.module.css"
import React, { useContext } from "react"

const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <div>
            <nav 
            className={styles.nav}
            >
                <img 
                alt="Pokoapi logo"
                className={styles.navbar_logo}
                src={logoImg}/>
                <div>{favoritePokemons.length} ❤️</div>
            </nav>
        </div>
    )
}
export default Navbar