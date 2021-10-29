import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { peticion } from "./Productos"
import {useState, useEffect} from 'react'




function ItemListContainer  ({name}) {
    const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect (() => {

    peticion
    //.then para sacar lo que esta dentro de la respuesta que es exitoso
      .then(respuesta => {
        setProductos(respuesta)
      })
      .finally(()=> setLoading(false))    
  }
  )

  console.log(productos)


    const onAdd = (cont) => {
        console.log(cont)
      }
    
    return (
        <div>
            <p>Bienvenido {name}</p>
            {loading ? <h3>Cargando...</h3> :  <ItemList productos = {productos}/>}
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer

