import React from "react";
import { Navbar, Nav, NavbarBrand, Container } from "react-bootstrap";
import logo from '../../img/logo.svg'
function WeatherNavbar()  {
	return (
		<header>
			<Navbar bg="dark" expand="lg">
				<Container>
					<NavbarBrand style={{color: 'white'}}
					href="#">
					<img
        				src={logo}
        				width="30"
        				height="30"
        				className="d-inline-block align-top"
        				alt="React logo"
						style={{margin: '0 10px 0 0'}}
      				/>
					  WeatherApp</NavbarBrand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
						<Nav.Link style={{color: 'white', fontSize: '20px'}} href="#">Home</Nav.Link>
						<Nav.Link style={{color: 'white', fontSize: '20px'}} href="#">Author</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}
export default WeatherNavbar;