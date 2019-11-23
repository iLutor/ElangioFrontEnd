import React from 'react'
import CardComponent from '../card/CardComponent'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ContentComponent = () => {


   

    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} lg={4}>
                    1   
                </Grid>
                <Grid item xs={12} lg={4}>
                    2
                </Grid> 
                <Grid item xs={12} lg={4}>
                    3 
                </Grid>
            </Grid>
          
        </>
    )


}

export default ContentComponent