const Item = ({productos}) => {
  return (
    <>
    <h2>{productos.name}</h2>
    <img src={productos.image}/>
    <h2>Precio: ${productos.precio}</h2> 
    <h3>{productos.detalle}</h3>
    </>
  )
}
export default Item
