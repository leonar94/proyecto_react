import ItemList from "./ItemList"
// import { peticion } from "./Productos"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Productos from "./Productos";



function ItemListContainer  (param) {
  const {categoryId} = useParams();
  const [productos, setProductos] = useState([])
  // const [loading, setLoading] = useState(true)
   

  useEffect (() => {
    setTimeout(() => {
      if (categoryId) {
        var productos_filtrados = Productos.filter(Producto => Producto.category === categoryId)

        setProductos (productos_filtrados)
      } else {
        setProductos (Productos);
      }
      console.log (Productos)
    }, 2000)
  }, [categoryId])

if (productos.length === 0) {
  return <p>Loading productos ... </p>;
}else {
  return (
    <>
    <ItemList param = {productos}/>
    </>
  )
}

}

  // //   console.log(id + "soy yop")

  //   peticion
  //     .then(respuesta => {
  //       setProductos(respuesta)
  //     })
  //     .finally(()=> setLoading(false))    
  // }
  

  // // console.log(productos)


  //   const onAdd = (cont) => {
  //       console.log(cont)
  //     }
    
    // return (
    //     <div>
            
    //         {loading ? <h3>Cargando...</h3> :  <ItemList productos = {productos}/>}
    //         <ItemCount stock={7} initial={1} onAdd={onAdd}/>
    //     </div>
    // )

  
export default ItemListContainer

