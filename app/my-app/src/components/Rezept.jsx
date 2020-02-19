import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';




// inspired by https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]];

const styles = {
  root: {
    background: styledBy('color', {
      green: '#64d633',
      yellow: '#fffc2e',
      default: "#ff2929"
    }),
    color: 'black',
    height: 48,
  },
};

const StyledButton = withStyles(styles)(({ classes, color, ...other }) => (
  <Button className={classes.root} {...other} />
));

export default function Rezept(props) {
  var color = "default"

    if (props.recipe.matchingRate >= 0.5){
        color = "yellow"
}

    if (props.recipe.matchingRate === 1){
        color = "green"
  }
  if (!props.shopping){
    if (props.recipe.matchingRate ===1){
        return (
            <React.Fragment>
                <StyledButton color={color}  ><Link href={"/Rezept/"+props.recipe.name}>{props.recipe.name}</Link></StyledButton>
                <Divider/>
            </React.Fragment>
          );
    }
    else{
        return(
            <div>
            </div>
        )
    }
    
  }
  else{
    return (
        <React.Fragment>
            <StyledButton color={color}  ><Link href={"/Rezept/"+props.recipe.name}>{props.recipe.name}</Link></StyledButton>
            <Divider/>
        </React.Fragment>
      );
  }
  
}
