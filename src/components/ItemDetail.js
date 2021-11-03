import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ItemDetail = ({producto}) => {

    return (
        <>
         <Card style={{ width: '18rem', display: 'inline-block'}}>
            <Card.Img variant="top" src={producto.foto} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus praesentium totam aperiam officiis non at porro reprehenderit cum quis beatae, natus expedita doloribus facilis amet sapiente. Rem nulla placeat hic.
                </Card.Text>
                <Button variant="primary">Detalle</Button>
            </Card.Body>
            </Card>   
        {/* <div key={producto.id} className='card w-25 mt.3'>
        <div className='card-header,'  >{producto.nombre}</div>
        <div className='card-body'>
                <img src={producto.foto} className='w-100'    alt ='foto'/>
            </div>        
            </div> */}
        </>
    )
}




export default ItemDetail