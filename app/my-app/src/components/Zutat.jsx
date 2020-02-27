import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';


export default function Zutatenliste(props) {

  //ingredients with callback to delete onchange

    const handleChange = event => {
        props.deleteIngredient(props.ingredient)
    };

    return (
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={false} onChange={handleChange}/>}
            label={props.ingredient}
          />
        </FormGroup>
    )
}
