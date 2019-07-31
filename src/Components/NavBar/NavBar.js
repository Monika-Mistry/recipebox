import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUtensils,
    faListAlt
} from '@fortawesome/free-solid-svg-icons';
import { NavLink as RRNavLink, BrowserRouter as Router, Route } from 'react-router-dom';

import { NewRecipe } from '../Recipe/NewRecipe/NewRecipe';
import { Home } from '../Home';
import {FilterableTable} from '../Recipe/FilterableTable/FilterableTable';

export class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        return (
            <Router>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={RRNavLink} to="/">Recipe Box</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/recipes"><FontAwesomeIcon icon={faListAlt} /> Recipe List</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/newRecipe"><FontAwesomeIcon icon={faUtensils} /> Add Recipe</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <br></br>

                <Route exact path="/" component={Home} />
                <Route path="/recipes" component={FilterableTable} />
                <Route path="/newRecipe" component={NewRecipe} />
            </Router>
        )
    }
}