import { Row, Col } from "reactstrap";
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';



function Menu() {

    //const [paginaAtual, mudaPaginaAtual] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const location = useLocation().pathname;

    return (
        <div>
            <Row>
                <Col>
                    <div>
                        <p className="text-primary">
                            <Navbar color="dark" dark expand="md" className='bg-black'>
                                <Link to="/" className="text-primary" type='navbar-brand'>SingJing</Link>
                                <NavbarToggler onClick={toggle} />
                                <Collapse isOpen={isOpen} navbar>
                                    <Nav className="me-auto" navbar>
                                        <NavItem>
                                            <Link to="/" className='nav-link'>Início</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="/cursos/" className='nav-link' >Cursos</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="/eventos" className='nav-link'>Eventos</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="/contato" className='nav-link'>Contato</Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="/inscricoes" className='nav-link'>Inscrições</Link>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Menu;