import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo1.png'
import logoMobile from '../logo1.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles" 
//import {link} 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        color: "black",
        flexGrow: 1,
        "&:hover": {
            color:  "black"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})
const style2 = makeStyles({
button1: {
  color: "black", 
  transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#4CAF50"
          },
}

})

function NavBar() {
    const classes = styles()
    const class1 = style2()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                  About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <a href="https://d2iitk.herokuapp.com" className={class1.button1} > Blog</a> 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Careers
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Demos 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                   <a href="mailto:askumar9672929010@gmail.com" className={class1.button1}>Contact Me</a> 
                </Typography>
                <CustomBtn txt="React JS Web"/>
            </Toolbar>
    )
}

export default NavBar
