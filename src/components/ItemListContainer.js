import ItemCount from "./ItemCount"
import React, { useState, useEffect } from 'react';
import {productos} from '../assets/productos';
import ItemList from "./ItemList";


const ItemListContainer = ({ greeting }) => {
      console.log (productos)
     // const [counter, setCounter] = useState(1)
     // let [cantSeleccionada,setCantSeleccionada] = useState(0)
const[listProducts, setListProducts] = useState([])
const[loading, setLoading] = useState(true)


const onAdd = () => {
            console.log("On Add")
            
}

useEffect(() => {
      const pedido = new Promise((resolve, reject) => {
            setTimeout (()=>{
                  resolve (productos)
            }, 2000)
      })

      pedido.then((listProducts)=>{
            setListProducts(listProducts)
            setLoading(false)
      })

}, []);

if (loading){
      return (
            <p>Cargando...</p>
      )
}else{
      return(
                <> 
                <ItemList listProducts={listProducts}/>
                <p className="greetingStyle">{greeting}</p>
                </>
          )
}
               
}
//   <ItemCount stock="5" initial="1" onAdd={onAdd}/>

export default ItemListContainer 