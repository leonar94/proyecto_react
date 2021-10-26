import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'

const NavBar =() => {
    return (
            <Navbar id="main-nav"  expand="lg">
            <Container>
                <Navbar.Brand href="#home">Sabor Waira</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Postres</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Salados</NavDropdown.Item>
                    
                    
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
            </Navbar>
            )           
}

export default NavBar;