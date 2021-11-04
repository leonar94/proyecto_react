import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar =() => {
    return (
            <Navbar id="main-nav"  expand="lg">
            <Container>
                <Link to="/" exact>
                <Navbar.Brand href="#home">Sabor Waira</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Postres</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Salados</NavDropdown.Item>              
                    </NavDropdown>
                    <Nav.Link href="#link">Contáctenos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
            </Navbar>
            )           
}

export default NavBar;