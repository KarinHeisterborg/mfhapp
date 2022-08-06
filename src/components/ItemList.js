import Item from "./Item"
import {productos} from '../assets/productos';


const ItemList = (listProducts) => {
console.log(productos)
  
  return (
    <>
              {listProducts.map(productos => <Item key={productos.id} productos={productos}/>)}
    </>
  )
}
 export default ItemList