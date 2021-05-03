import React from "react";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar = props => {
    return ( <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Ma salle de muscu</Navbar.Brand>
        <Navbar.Brand as={Link} to="/about">A propos</Navbar.Brand>
        <Navbar.Brand as={Link} to="/atelier">Nos ateliers</Navbar.Brand>
        <Navbar.Brand as={Link} to="/boisson">Nos boissons</Navbar.Brand>
    </Navbar>)
}

export default NavBar
