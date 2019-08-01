import React from 'react';
import {
    Form,
    Input,
    Label,
    FormGroup,
    Button,
    CustomInput,
    Col
} from 'reactstrap';

export function NewRecipe(props) {
    return (
        <Form className="container" onSubmit={props.addRecipe}>
            <FormGroup row>
                <Label for="recipeName" sm={2}>Name:</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="text"
                        name="recipeName"
                        id="recipeName"
                        placeholder="Enter a recipe name" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="description" sm={2}>Description:</Label>
                <Col sm={10}>
                    <Input
                        required
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Enter recipe description" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2}>Ingredients:</Label>
                <Col sm={10}>
                    <CustomInput type="checkbox" id="Milk" name="ingredients" label="Milk" onChange={props.ingredientSelected} inline />
                    <CustomInput type="checkbox" id="Cheese" name="ingredients" label="Cheese" onChange={props.ingredientSelected} inline />
                    <CustomInput type="checkbox" id="Butter" name="ingredients" label="Butter" onChange={props.ingredientSelected} inline />
                    <CustomInput type="checkbox" id="Flour" name="ingredients" label="Flour" onChange={props.ingredientSelected} inline />
                    <CustomInput type="checkbox" id="Eggs" name="ingredients" label="Eggs" inline />
                    <CustomInput type="checkbox" id="Vegetables" name="ingredients" label="Vegetables" onChange={props.ingredientSelected} inline />
                    <CustomInput type="checkbox" id="Fruit" name="ingredients" label="Fruit" onChange={props.ingredientSelected} inline />
                    <CustomInput type="checkbox" id="Chocolate" name="ingredients" label="Chocolate" onChange={props.ingredientSelected} inline />
                    <CustomInput type="checkbox" id="Rice" name="ingredients" label="Rice" onChange={props.ingredientSelected} inline />
                    <CustomInput type="checkbox" id="Meat" name="ingredients" label="Meat" onChange={props.ingredientSelected} inline />
                    <CustomInput type="checkbox" id="Nuts" name="ingredients" label="Nuts" onChange={props.ingredientSelected} inline />
                    <CustomInput type="checkbox" id="Beans" name="ingredients" label="Beans" onChange={props.ingredientSelected} inline />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2}>Image:</Label>
                <Col sm={10}>
                    <Input type="file" id="imageFile" />
                </Col>
            </FormGroup>
            <div className="text-center">
                <Button>Add Recipe</Button>
            </div>
        </Form>
    )
}