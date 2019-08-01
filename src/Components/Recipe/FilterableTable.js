import React, { Component } from 'react';
import { RecipeTable } from './RecipeTable';

export class FilterableTable extends Component {
    componentDidMount(){
        this.props.getAll();
    }  

    render() {
        return (
            <RecipeTable data={this.props.data} click={this.props.click}/>
        )
    }
}