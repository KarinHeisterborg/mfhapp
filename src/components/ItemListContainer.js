import ItemCount from "./ItemCount"

const ItemListContainer = ({ greeting }) => {
          return(
                <> 
                <ItemCount/>
                <p className="greetingStyle">{greeting}</p>
                </>
              
          )
}
export default ItemListContainer 