import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import styles from "./styles.module.css"

const Pokemon = (props) => {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
    const { pokemon } = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
        <div className={styles.pokemon}>
            <header className={styles.pokemon_img}>
                <img
                    alt={pokemon.name}
                    src={pokemon.sprites.front_default}
                    className={styles.pokemon_image}
                />
            </header>
            <div className={styles.info}>
                <span >#{pokemon.id}</span>
                <h3>{pokemon.name}</h3>
                <div className={styles.pokemon_type}>
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className={styles.pokemon_type_text}>{type.type.name}</div>
                        )
                    })}
                </div>
                <button className={styles.pokemon_heart_btn} onClick={onHeartClick}>
                    {heart}
                </button>
            </div>

        </div>)
}

export default Pokemon;