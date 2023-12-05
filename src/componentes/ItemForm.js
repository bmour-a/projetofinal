import { FormGroup, Label, Input } from "reactstrap";
import React from "react";

function ItemForm({ label, name, type, ph }) {
    return (
        <div>
            <FormGroup>
                <Label for={name}>
                    {label}:
                </Label>
                <Input
                    id={name}
                    name={name}
                    placeholder={ph}
                    type={type}
                />
            </FormGroup>
        </div>
    )
}
export default ItemForm;