
import ItemDetail from "./ItemDetail"
import { productos } from "../assets/productos"
import React, { useState, useEffect } from 'react';

const ItemDetailContainer = () => {

const[listProducts, setListProducts] = useState([])
const[loading, setLoading] = useState(true)     

  
          useEffect(() => {
                    const GetItem = () => {
                             return new Promise((resolve, reject) => {
                          setTimeout (() =>{
                                resolve (productos)
                          }, 2000)
                    })
               }
               GetItem()
               .then((listProducts)=>{


               setListProducts (listProducts[3])
               setLoading(false)
                    })
              }, []);
           
              if (loading){
                    return (
                          <p>Cargando...</p>
                    )
              }else{
                   
                    return(
    <div><ItemDetail listProducts= {listProducts} /></div>
  )}
 
}
export default ItemDetailContainer   