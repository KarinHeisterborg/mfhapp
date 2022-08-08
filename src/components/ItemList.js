import Item from "./Item"


const ItemList = ({listProducts}) => {
  console.log(listProducts)
  return (

    <>
    {listProducts.map((producto)=>{
      return <Item key={producto.id} producto={producto}/>
      
    })}
    </>
  )
}

 export default ItemList