
import { useState } from 'react';

const IngredientList = (props) => {
    return( 
        <ul>
            {props.ingredients?.map((ingredient, ind)=>{
                return (
                    <li style={{ backgroundColor: ingredient.color }} key={ind}>
                        {ingredient.name}
                        <button 
                            className={ingredient.name}
                            onClick={() => props.addToBurger(ingredient)}
                        >
                            +
                        </button>
                    </li>
                )
            })}
        </ul>
    );
  };
  
  export default IngredientList;
  