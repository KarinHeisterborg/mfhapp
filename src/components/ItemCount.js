

const ItemCount = ({add, substract, counter, stock, resetCounter })=> {

          const [counter, setCounter] = useState(0)

          const add = () => {

                    if (counter < stock ){
                        setCounter(counter+1)
                    }
          }

          const substract = () => {

                    if (counter > initial ){
                        setCounter(counter-1)
                    }
          }    

          const resetCounter = () => {
                    setContador(0)
                }

          return (
                    <>
                    <button onClick={add}>click</button>
                    <button onClick={resetCounter}>click</button>
                    <button onClick={substract}>click</button>
                    </> 
          )
}
export default ItemCount