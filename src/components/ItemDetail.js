import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Productos from './Productos'


const ItemDetail = ({item}) => {

const {id, category, foto, nombre, precio} = item [0];

    return (
      
         <Card className='itemDetail' key = {id} id = {id} style={{ width: '18rem', display: 'inline-block'}}>
            <Card.Img variant="top" src={item.foto} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus praesentium totam aperiam officiis non at porro reprehenderit cum quis beatae, natus expedita doloribus facilis amet sapiente. Rem nulla placeat hic.
                </Card.Text>
                <Button variant="primary">
                <Link to={'/'}> Home</Link> 
                    </Button>
            </Card.Body>
            </Card>   

        // <div key={item.id} className='card w-25 mt.3'>
        // <div className='card-header,'  >{item.nombre}</div>
        // <div className='card-body'>
        //         <img src={item.foto} className='w-100'    alt ='foto'/>
        //     </div>        
        //     </div> 
    )
}




export default ItemDetail