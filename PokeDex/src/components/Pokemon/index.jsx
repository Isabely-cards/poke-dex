import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";
import styles from "./styles.module.css"

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
    <div className={styles.pokemon_card}>
        <div className={styles.pokemon_image_container}>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className={styles.pokemon_image}/>
        </div>
        <div className={styles.card_body}>
            <div className={styles.card_top}>
                <h3> {pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className={styles.card_bottom}>
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
        </div>
    </div>)
}

export default Pokemon;