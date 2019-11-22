import React from 'react'
import CardComponent from '../card/CardComponent'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const ContentComponent = () => {


    const rowStyle = {
		marginTop: '20px',
        marginBottom: '30px'
    }

    return (
        <>
            <Grid container lg={12} spacing={1}>
                <Grid container item xs={12} sm={12} lg={6} spacing={3}>
                    <Grid item md={6} xs={12} sm={12} lg={4} >
                        <CardComponent name="Pronunciation" />
                    </Grid>
                    <Grid item md={6} xs={12} sm={12} lg={6} >
                        <CardComponent name="Pronunciation" />
                    </Grid>
                    <Grid item md={6} xs={12} sm={12} lg={6} >
                        <CardComponent name="Listen" />
                    </Grid>
                </Grid >
                <Grid container item xs={12} sm={12} lg={4} spacing={3}>
                    <Grid item md={6} xs={12} sm={12} lg={4} >
                        <CardComponent name="Chat" />
                    </Grid>
                    <Grid item md={6} xs={12} sm={12} lg={4} >
                        <CardComponent name="Movie phrases" />
                    </Grid>
                    <Grid item md={6} xs={12} sm={12} lg={4} >
                        <CardComponent name="Statistics" />
                    </Grid>
                </Grid >

            </Grid>
        </>
    )


}

export default ContentComponent