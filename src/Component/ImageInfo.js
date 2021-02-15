import React from 'react';
import {Grid,makeStyles, Typography, Paper } from '@material-ui/core';
import web from '../Component/pro.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#000',
      boxShadow: '2px 2px 14px 0px rgba(233,233,233,0.75)'
    },
    typoCard:{
        fontSize:'48px',
        color:'#fff',
        fontWeight:'600',
        textAlign:'center',
        position:'absolute',
        marginLeft:'40%',
        marginTop:'-120px'
        

    },
    image:{
        backgroundImage:'cover',
        width:'100%',
        height:'180px',
        background:'#000'
      }
  }));

export default function ImageInfo() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid  xs={12} style={{marginTop: '60px'}}>
                <Paper className={classes.paper} >
                   <div className={classes.image}></div>
                   <div variant="h1" className={classes.typoCard}>Think Unique</div>
                </Paper>
            </Grid>
        </div>
    )
}
