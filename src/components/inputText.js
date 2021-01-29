import React from 'react';
import {FormGroup, Label, Input } from 'reactstrap';

class FormInput extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <FormGroup>
            <Label for="exampleEmail">{this.props.children}</Label>
                <Input
                    type={this.props.type}
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange}
                />
            </FormGroup>
        );
    }
  
}

export default FormInput;