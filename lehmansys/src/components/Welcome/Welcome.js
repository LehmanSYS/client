import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
// import ReactPhoneInput from 'react-phone-input-mui';
//var MuiPhoneNumber = require("material-ui-phone-number")
// import axios from 'axios';
import { Redirect } from 'react-router-dom'
// import Cookies from 'universal-cookie';
// import Homepage from './Homepage';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href=""> */}
        LehmanSYS
      {/* </Link>{' '} */}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://media2.govtech.com/images/940*630/Bahamas3.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Welcome extends React.Component {
    constructor(props) {
        super();
        this.state = {
            // email: "",
            // password:"",
            // redirect: false,
            // isAuthenticated: false,
            // profile: {}
        };
    }

    // componentDidMount() {
    //     const auth = sessionStorage.getItem("pizzaAuth");
    //     if (auth) {
    //       this.setState({
    //         isAuthenticated: true
    //       });
    //     } 
    //     else {
    //       this.setState({
    //         isAuthenticated: false
    //       });
    //     }
    // }

    handleChange = event => ({target}) => {
        this.setState({[event]: target.value});
    }
    
    handleSubmit = async (event) => {
        
    }

    handleKeyPress = event => {
        if(event.key === 'Enter') {
          this.handleSubmit();
        }
    }

    render() {
        //const {  }
        // if (this.state.isAuthenticated) {
        //     //debugger
        //     return(
        //         // <Homepage profile={this.state.profile}/>
        //         // <div>
        //         //    Welcome, {this.state.profile.name}
        //         // </div>
        //     )
        // }
    //const { classes } = this.props;
    const { classes} = this.props;
    return (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                LehmanSYS
              </Typography>
              <form className={classes.form} noValidate>
                <Link to="/" variant="body2">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={this.handleSubmit}
                    >
                        Get Started
                    </Button>
                </Link>
                {/* <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleSubmit}
                >
                  Get Started
                </Button> */}
                <Grid container>
                  <Grid item xs>
                    {/* <Link href="" variant="body2">
                      Forgot password?
                    </Link> */}
                  </Grid>
                  <Grid item>
                    
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      );
  }
}

export default withRouter(withStyles(styles)(Welcome))