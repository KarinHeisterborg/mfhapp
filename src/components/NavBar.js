import CartWidget from "./CartWidget"
function NavBar() {
          return (
              <header id="heather">
                  <CartWidget/>
                  <h1 className="titulo" >Mi Feria Home</h1>
                  <nav>
                      <a href="#">link</a>
                      <a href="#">link</a>
                  </nav>
              </header>
          )
}
      
export default NavBar