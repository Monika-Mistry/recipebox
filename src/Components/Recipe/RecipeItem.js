import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Link } from 'react-router-dom';

export function RecipeItem(props) {
    return (

        <tbody>
            {props.data.map(element => {
                return (
                    <tr key={element._id}>
                        <td>{element.name}</td>
                        <td>
                            <Button onClick={props.click} data={element._id}>
                                <Link to="/details">More Details</Link>
                            </Button></td>
                    </tr>)
            })}
        </tbody>


    )
}