import { productos } from "../assets/productos"
const ItemDetail = (producto)  => {
  return (
   
          <div>
          <h2>{producto.name}</h2>
          <img alt="product" src={producto.img}/>
          <h2>Precio: ${producto.precio}</h2> 
          <h3>{producto.descripcion}</h3>
          </div>
        )
  
}
export default ItemDetail