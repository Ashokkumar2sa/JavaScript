import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
          
            Ashok Kumar Saini 
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            I am a undergrad student at Indian Institute of Technology , Kanpur doing my B.tech degree in Computer Science and Engineering.
            I made this website using React-JS. Using the utility of material-ui/core and material-ui/icons. The best part of react was we could embed css or html code within our main code files.
            This is just a one page website. I made this to host my small javascript code/projects in one place. I used Heroku and github to host this website.   
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Django Blog" btnTitle="Visit" linku="https://d2iitk.herokuapp.com/"/>
          <Grid icon={<HttpIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Github Pages" btnTitle="Visit" linku="https://ashokkumar2sa.github.io/"/>
          <Grid icon={<ComputerIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="P5 Starfield" btnTitle="Show me More"linku="https://ashokkumar2sa.github.io/starfield"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<ComputerIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="P5 Sanke-Game" btnTitle="Show me More" linku="https://ashokkumar2sa.github.io/snake-js"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="P5 Rain" btnTitle="Show me More" linku="https://ashokkumar2sa.github.io/rain_index.html"/>
          <Grid icon={<ComputerIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="P5 Menger" btnTitle="Show me More" linku="https://ashokkumar2sa.github.io/merger.html"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

