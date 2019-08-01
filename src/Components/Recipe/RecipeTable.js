import React from 'react';
import { Table } from 'reactstrap';

import { RecipeItem } from './RecipeItem';

export function RecipeTable(props) {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>More Details</th>
                    </tr>
                </thead>
                <RecipeItem data={props.data} click={props.click}/>
            </Table>
        </div>
    )
}