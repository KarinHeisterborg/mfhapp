
import React, { useState } from 'react';
const ItemCount = ()=> {

          const [counter, setCounter] = useState(1)

          const add = () => {

                    if (counter < 5 ){
                        setCounter(counter+1)
                    }
          }

          const substract = () => {

                    if (counter > 1 ){
                        setCounter(counter-1)
                    }
          }    

          const resetCounter = () => {
                    setCounter(1)
                }

          return (
                    <div className='counterContainer'>
                    <button onClick={substract}>-</button><br/>
                    <h3>{counter}</h3>
                    <button onClick={add}>+</button>
                    <button onClick={resetCounter}>Reset</button>
                    </div> 
          )
}
export default ItemCount