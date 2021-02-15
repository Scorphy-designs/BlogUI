import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      marginTop:'20px',
      textAlign: 'center',
      //color: theme.palette.text.secondary,
      boxShadow: '2px 2px 14px 0px rgba(233,233,233,0.75)'
    },
    typo:{
        fontSize:'30px',
        color:'#000',
        fontWeight:'600',
        textAlign:'center',
        marginBottom:'20px'
    },
    typoCard:{
        fontSize:'18px',
        color:'#000',
        fontWeight:'600',
        textAlign:'center',
        margin:'10px'
    },
    fontSizeLarge:{
        fontSize:'large',
    }
}))

export default function Services() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
         
         <Grid item xs={12}>
          <Paper className={classes.paper} >
              <Typography variant="h1" className={classes.typo}>Services Offered</Typography>
              <div>
              <Typography variant="p" > MaterialUI included an overlay property on the CardMedia, but the v1 library doesn't seem to have anything like that.</Typography>
              </div>
              <div></div>
              <Grid container spacing={1} style={{marginTop: '60px'}}>
                <Grid item  xs={3}>
                <Paper className={classes.paper}>
                   <IconButton edge="start" className={classes.menuButton} color="#000" aria-label="menu">
                      <WallpaperIcon className={classes.IconButton}/>
                   </IconButton>
                   <Typography variant="h1" className={classes.typoCard}>Think Unique</Typography>
                </Paper>
                </Grid>
                <Grid item  xs={3}>
                <Paper className={classes.paper}>
                  <IconButton edge="start" className={classes.menuButton} color="#000" aria-label="menu">
                      <ArtTrackIcon className={classes.IconButton}/>
                   </IconButton>
                   <Typography variant="h1" className={classes.typoCard}>Design way</Typography>
                </Paper>
                </Grid>
                <Grid item  xs={3}>
                <Paper className={classes.paper}>
                 <IconButton edge="start" className={classes.menuButton} color="#000" aria-label="menu">
                      <DeveloperBoardIcon className={classes.IconButton}/>
                   </IconButton>
                   <Typography variant="h1" className={classes.typoCard}>Develop Future</Typography>
                </Paper>
                </Grid>
                <Grid item  xs={3}>
                <Paper className={classes.paper}>
                <IconButton edge="start" className={classes.menuButton} color="#000" aria-label="menu">
                      <AttachMoneyIcon className={classes.IconButton}/>
                   </IconButton>
                   <Typography variant="h1" className={classes.typoCard}>Make More</Typography>
                </Paper>
                </Grid>
                </Grid>

                {/* second row */}
                <Grid container spacing={1} style={{marginTop: '60px'}}>
                <Grid item  xs={3}>
                <Paper className={classes.paper}>
                   <IconButton edge="start" className={classes.menuButton} color="#000" aria-label="menu">
                      <WallpaperIcon className={classes.IconButton}/>
                   </IconButton>
                   <Typography variant="h1" className={classes.typoCard}>Think Unique</Typography>
                </Paper>
                </Grid>
                <Grid item  xs={3}>
                <Paper className={classes.paper}>
                  <IconButton edge="start" className={classes.menuButton} color="#000" aria-label="menu">
                      <ArtTrackIcon className={classes.IconButton}/>
                   </IconButton>
                   <Typography variant="h1" className={classes.typoCard}>Design way</Typography>
                </Paper>
                </Grid>
                <Grid item  xs={3}>
                <Paper className={classes.paper}>
                 <IconButton edge="start" className={classes.menuButton} color="#000" aria-label="menu">
                      <DeveloperBoardIcon className={classes.IconButton}/>
                   </IconButton>
                   <Typography variant="h1" className={classes.typoCard}>Develop Future</Typography>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                <IconButton edge="start" className={classes.menuButton} color="#000" aria-label="menu">
                      <AttachMoneyIcon className={classes.IconButton}/>
                   </IconButton>
                   <Typography variant="h1" className={classes.typoCard}>Make More</Typography>
                </Paper>
                </Grid>
                </Grid>
          </Paper>
       
        </Grid>
        </div>
    )
}
