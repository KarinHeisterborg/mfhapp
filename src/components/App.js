import ItemListContainer from './ItemListContainer';
import Navbar from './NavBar';

function App() {
  return (
       <>
          <Navbar/>
          <ItemListContainer greeting="Producto x"/>
          <footer>
               <p>footer</p>
          </footer>
      </>
  )
}
export default App;
