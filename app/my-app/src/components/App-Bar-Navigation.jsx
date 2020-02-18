import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Grid from '@material-ui/core/Grid';
import "./App_Bar.css"




export default function App_Bar_Navigation({props}) {

    return (
        <div>
            <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    container spacing={2}>
                <Grid text item xs={6}>
                    <IconButton color='inherit' aria-label="delete" component={Link} to={'/'}>
                        <PlaylistAddIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <IconButton color='inherit' aria-label="delete" component={Link} to={'/Rezeptübersicht'}>
                        <ListIcon />
                    </IconButton>
                </Grid>
            </Grid>            
        </div>
    )
}
