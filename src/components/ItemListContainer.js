import ItemCount from "./ItemCount"

const ItemListContainer = ({ greeting }) => {
          return(
                <> 
                <ItemCount stock="5" initial="1"/>
                <p className="greetingStyle">{greeting}</p>
                </>
              
          )
}
export default ItemListContainer 