import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    return (
        <Card style={{ width: '18rem', display: 'inline-block'}}>
            <Card.Img variant="top" src={item.foto} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus praesentium totam aperiam officiis non at porro reprehenderit cum quis beatae, natus expedita doloribus facilis amet sapiente. Rem nulla placeat hic.
                </Card.Text>
                <Button variant="primary">
                <Link to={`/itemDetail/${item.id}`}> Detalle</Link>
                </Button>
            </Card.Body>
            </Card>       
        //      
    )
}

export default Item