import { useState } from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = (args) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar {...args}>
				<NavbarBrand to="/">ConcertGo</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto" navbar>
						<NavItem>
							<NavLink to="/concertgoindex">List of Events</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/concertgonew">Add an Event</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/concertgofaq">Frequently Asked Questions</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/aboutus">Meet the Team</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
