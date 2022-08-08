const Item = ({producto}) => {
  console.log(producto)

  return (
    <>
    <h2>{producto.name}</h2>
    <img alt="product" src={producto.img}/>
    <h2>Precio: ${producto.precio}</h2> 
    <h3>{producto.detalle}</h3>
    </>
  )
}
export default Item
