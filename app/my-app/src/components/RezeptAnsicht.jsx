import React, { Fragment, useState, useEffect } from 'react'
import Stepper from "./Stepper"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Test from "./../Bilder/01.jpg"
import axios from "axios"


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function RezeptAnsicht({match}) {
    const classes = useStyles();

    const recipe_name = match.params.id

    const [images, setImages] = useState({
        "Test" : Test
    })

    const [download, setDownload] = useState("")

    const [recipe, setRecipes] = useState([])

    useEffect(() => {
        getDatabaseUpdate()
    }, [])

    function getDatabaseUpdate(){
        axios.get("https://dhbwws20.firebaseio.com/recipes.json").then(
        response =>   {
            const fetchedOrders = [];
            for (let key in response.data){
                fetchedOrders.push({
                    ...response.data[key], 
                    id : key
                })
            setDownload(fetchedOrders)
            }
    })}

    if(download !== ""){
        engineerDonwload()
    }

    function engineerDonwload(){
        download.map(item => {
            const ingredients = item.ingredients.split(",")
            const recipename = item.name
            var newelement = {}
            newelement["ingredients"] = ingredients
            newelement["name"] = recipename
            recipe.push(newelement)
        })
        
    }

    const this_recipe =  recipe.filter(function(x) {
        return x.name == recipe_name;
    });

    console.log(this_recipe)
    return (
        <Fragment>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={images[recipe_name]}
                    title={recipe_name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {recipe_name}
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
        </Card>
        </Fragment>
    )
}             //<Stepper recipe={""}/>

