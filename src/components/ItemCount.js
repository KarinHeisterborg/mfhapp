import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
const ItemCount = ({initial, stock, onAdd})=> {

          const [counter, setCounter] = useState(initial)

          const add = () => {

                    if (counter < stock){
                        setCounter(counter+1)
                    }
          }

          const substract = () => {
                    if (counter > 0 ){
                        setCounter(counter-1)
                    }
          }    
          const resetCounter = () => {
                    setCounter(1)
                }

          const addToCart = () => {
                    onAdd(counter)
                }      
          return (
                    <div className='contadorProductos'>
                    <div className='contSumaResta'>
                    <button  className='btnResta' onClick={substract}>-</button><br/>
                    <input value={counter} ></input>
                    <button className='btnSuma' onClick={add}>+</button>
                    <button onClick={resetCounter}>Reset</button>
                    </div>
                    <button className='btn btn-outline-primary mt-2 w-100 btnAgregar' onClick={addToCart}>AGREGAR</button>
                    </div> 
                    
          ) 
}
export default ItemCount