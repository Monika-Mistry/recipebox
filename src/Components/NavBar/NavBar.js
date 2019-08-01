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

import { Recipe } from '../Recipe/Recipe';
import { Home } from '../Home';


export class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false,
            recipeID: ""
        };
    }

    toggle = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    handleClick = event => {
        this.setState({
            recipeID: event.target.getAttribute("data")
        })

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
                <Route path="/recipes" render={props => <Recipe pageSelected="list" click={this.handleClick} />} />
                <Route path="/newRecipe" render={props => <Recipe pageSelected="new" />} />
                <Route path="/details" render={props => <Recipe pageSelected="recipe" recipeID={this.state.recipeID} />} />
            </Router>
        )
    }
}