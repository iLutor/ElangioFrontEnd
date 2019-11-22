import React from 'react'
import { Card } from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import './card.scss'




const CardComponent = (props) => {

    const useStyles = makeStyles({
        card: {
            maxWidth: 345,
            alignItems: 'center',
            textAling: 'center'
        },
    })

    const classes = useStyles()

    return (
        <Card className="classes.card" >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="logo_small.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                
                </CardContent>

            </CardActionArea>


        </Card>
    )
}

export default CardComponent