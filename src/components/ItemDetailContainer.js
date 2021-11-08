import { useState, useEffect } from "react";
// import { getFetch } from "./Productos"
import ItemDetail from "./ItemDetail";
// import ItemCount from './ItemCount'
import Productos from "./Productos";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item , setItem] = useState([]);

  useEffect(() => {
    setTimeout (() => {
      setItem (
        Productos.filter(item => item.id === parseInt(id))
      )
    }, 1000)
   }, [id]);

   if (item.length === 0) {
     return <h1>Cargando...</h1>
   }else {
     return (
       <>
         <ItemDetail item={item} />

         </>
     )
   }



    // const [producto, setProducto] = useState ({})
    
    // useEffect(() => {
    //     getFetch
    //     .then(resp =>setProducto(resp))
    // }, [])

    // const onAdd = (cant) => {
    //     console.log(cant)
    //   }
    // return (
    //     <>
    //       <ItemDetail producto={producto}/>
    //       <ItemCount stock={7} initial={1} onAdd={onAdd} />
    //     </>

    // ) 
    }

export default ItemDetailContainer