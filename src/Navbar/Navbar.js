import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Navbar.css';

const navbar = () => (
    <Navbar className="Navbar-custom" expand="lg">
        <Navbar.Brand href="#home">React-Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/tops">Tops</Link>
                <Link className="nav-link" to="/bottoms">Bottoms</Link>
                <Link className="nav-link" to="/bras">Sports Bras</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
            <Link to="/cart"><Button id="shopping-cart-icon"><ShoppingCartIcon></ShoppingCartIcon></Button></Link>
        </Navbar.Collapse>
    </Navbar>
);

export default navbar;