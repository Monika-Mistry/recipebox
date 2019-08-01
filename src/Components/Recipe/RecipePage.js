import React from 'react';

export function RecipePage(props) {
    const recipe = props.data.filter(recipe => recipe._id === props.recipeID);
    console.log(recipe[0])
    return (
        <div className="container">
            <h1>{this.state.recipe.name}</h1>
            <p>{this.state.recipe.description}</p>
            <ul>
                {this.props.ingredients.map(element => {
                    return (
                        <li key={element}>{element}</li>
                    )
                })}
            </ul>
        </div>
    )
}

