import React, { Component } from 'react';
import Axios from 'axios';

import { getURL, addURL } from '../Constants';
import { NewRecipe } from './NewRecipe';
import { FilterableTable } from './FilterableTable';
import { RecipePage } from './RecipePage';

export class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            ingredients: []
        }
    };

    getAll = () => {
        Axios.get(getURL)
            .then(response => {
                this.setState({
                    data: response.data
                });
            }).catch(err => console.log(err.message));
    };

    ingredientSelected = event => {
        const arr = this.state.ingredients;
        const id = event.target.id;
        if (arr.includes(id)) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === id) {
                    arr.splice(i, 1);
                }
            }
            this.setState({
                ingredients: arr
            })
        } else {
            this.setState({
                ingredients: arr.concat(id)
            })
        }
    }

    addRecipe = event => {
        event.preventDefault();
        const recipe = {
            name: event.target[0].value,
            description: event.target[1].value,
            ingredients: this.state.ingredients
        }

        Axios.post(addURL, recipe).then(response => {
            this.getAll();
        }).catch(err => console.log(err.message));

    };

    render() {
        if (this.props.pageSelected === "new") {
            return (
                <NewRecipe addRecipe={this.addRecipe} ingredientSelected={this.ingredientSelected} />
            )
        } else if (this.props.pageSelected === "list") {
            return (
                <FilterableTable getAll={this.getAll} data={this.state.data} click={this.props.click} />
            )
        } else {
            return (
                <RecipePage data={this.state.data} recipeID={this.props.recipeID} />
                )
        }

    }


}
