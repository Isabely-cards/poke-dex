import React from "react";
import Pagination from "../Pagination/index";
import Pokemon from "../Pokemon/index";
import styles from "./styles.module.css"


const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
      if(page > 0) {
          setPage(page-1)
      }
  }
  const onRightClickHandler = () => {
      if(page+1 !== totalPages){
          setPage(page+1)
      }
  }
  return (
    <div>
      <div className={styles.pokedex_header}>
        <h1>Pokedex</h1>
        <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className={styles.pokedex_grid}>
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon key={index}  pokemon={pokemon}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
