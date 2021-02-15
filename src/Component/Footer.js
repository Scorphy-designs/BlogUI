import React from 'react';
import {makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    image:{
        backgroundImage:'cover',
        width:'100%',
        height:'40px',
        background:'#000'
      },
      menuButton:{
          marginLeft:'45%'
      }
  }));

export default function Footer() {
    const classes = useStyles();
    return (
        
             <div>
                
                  <IconButton edge="center" className={classes.menuButton} color="#000" aria-label="menu">
                      <FacebookIcon/>
                   </IconButton>
                   <IconButton edge="center"  color="#000" aria-label="menu">
                      <InstagramIcon/>
                   </IconButton>
                   <IconButton edge="center"  color="#000" aria-label="menu">
                      <TwitterIcon/>
                   </IconButton>
            
            </div>
        
    )
}
