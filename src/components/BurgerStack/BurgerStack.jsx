
import { useState } from 'react';

const BurgerStack = (props) => {

    console.log(props.burgerstate);

    return ( 
        <ul>
            {props.burgerstate?.map((ingredient, ind) => {
                return (
                    <li style={{ backgroundColor: ingredient.color }} key={ind}>
                        {ingredient.name}
                        <button 
                            onClick={() => props.removeFromBurger(ingredient,ind)}
                            className={ingredient.name}
                        >
                            -
                        </button>
                    </li>
                )
            })}
        </ul>
    );
  };
  
  export default BurgerStack;
  