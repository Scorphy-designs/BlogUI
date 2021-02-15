import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import web from '../Component/pro.jpg';
import web1 from '../Component/pro1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'70px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    //color: theme.palette.text.secondary,
    boxShadow: '0px 0px 0px 0px rgba(233,233,233,0.75)'
  },
  typo:{
      fontSize:'48px',
      color:'#000',
      fontWeight:'600',
      textAlign:'left',
      margin:'100px',
  },
  typop:{
    fontSize:'18px',
    color:'#000',
    fontWeight:'400',
    margin:'90px',
    display:'inline',
    wordWrap:'break-word',
    float:'left',
    marginTop:'-80px'
  },
  btn:{
    fontSize:'16px',
    color:'#fff',
    fontWeight:'400',
    float:'left',
    background:'#000',
    padding:'10px 20px',
    borderRadius:'50px',
    margin:'90px',
    marginTop:'-40px',
    '&:hover':{
        color:'#fff',
        background:'#2F3337',
        padding:'10px 20px',
        borderRadius:'50px'
    }
  },
  image:{
    backgroundImage:'cover',
   // padding:'10px',
    width:'50%',
    height:'50%',
    marginTop:'40px',
  },
  image1:{
    backgroundImage:'cover',
   // padding:'10px',
    width:'50%',
    height:'50%',
    marginTop:'40px'
  }
}))

export default function Hero() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h1" className={classes.typo}>Make things easier!</Typography>
            <Typography variant='p' className={classes.typop}>You can explore the default values of the typography using the theme explorer or by opening the dev tools.</Typography>
            <Button className={classes.btn}>Get In!</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <img src={web} className={classes.image}/>
              <img src={web1} className={classes.image1}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
}
