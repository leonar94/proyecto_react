import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useContext } from "react"
import { CartContext } from "../CartContext"



const ItemDetail = ({item}) => {

    const {addToCart} = useContext(CartContext)


    const onAdd = (count) => {
        console.log(count)
        addToCart(item, count)
    }


const {id, categoryId,} = item[0];

    return (
        <>
         <Card className='itemDetail' key = {id} id = {id} categoryId = {categoryId} style={{ width: '18rem', display: 'inline-block'}}>
            <Card.Img variant="top" src={item[0].foto} />
            <Card.Body>
                <Card.Title>{item[0].nombre}</Card.Title>
                <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus praesentium totam aperiam officiis non at porro reprehenderit cum quis beatae, natus expedita doloribus facilis amet sapiente. Rem nulla placeat hic.
                </Card.Text>
                <Button variant="secondary">
                <Link to={'/'}> Home</Link> 
                    </Button>
                    <Card.Title>{item[0].precio}</Card.Title>
                    <ItemCount stock={7} initial={1} onAdd={onAdd}/>
            </Card.Body>
            </Card>   
            
            </>        
        // <div key={item.id} className='card w-25 mt.3'>
        // <div className='card-header,'  >{item.nombre}</div>
        // <div className='card-body'>
        //         <img src={item.foto} className='w-100'    alt ='foto'/>
        //     </div>        
        //     </div> 
    )
}




export default ItemDetail