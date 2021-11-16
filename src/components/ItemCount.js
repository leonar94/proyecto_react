import {useState} from "react"
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"



const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    function agregar () {
        if (count<stock) {
            setCount(count + 1) 
        }
    }

    function quitar () {
        if (count>0) {
        setCount (count - 1)
        }
    }

    const agregarCarrito=()=>{
        onAdd(count)       
    }
    
   
    return (
        <div>
            <Button onClick={quitar} variant="secondary">-</Button>{' '}
            <Link to='/CartWdiget'>
            <Button onClick={agregarCarrito} variant="secondary">Agregar</Button>{' '}
            </Link>
            <Button onClick={agregar} variant="secondary">+</Button>{' '}            
            
            <p>{count}</p>
        </div>
    )
}


export default ItemCount
