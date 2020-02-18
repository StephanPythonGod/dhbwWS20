import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Zutatenliste from "./Zutatenliste"
import Button from '@material-ui/core/Button';




export default function Zutateneingabe(props) {

    const [values, setValues] = useState({
        ingredients : ""
    })

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value})
      };

    function handleAddElement(){
        if (values.ingredients === "") return
        props.updateIngredients(values.ingredients)
        setValues({
            ingredients : ""
        })
    }

    return (
    <React.Fragment>
        <Grid container
        direction="row"
        justify="center"
        alignItems="center">
            <Grid>
                <TextField value={values.ingredients} onChange={handleChange("ingredients")} label="Zutat" variant="outlined" />
            </Grid>
            <Grid>
                <Button onClick={handleAddElement} variant="contained">Hinzufügen</Button>
            </Grid>
        </Grid>
        <Zutatenliste ingredients={props.ingredients} deleteIngredients = {props.deleteIngredients}/>
    </React.Fragment>
    )
}
