import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Button,Modal, DialogContent, TextField, Toolbar, AppBar, Typography, Dialog, DialogTitle, DialogContentText, DialogActions} from '@material-ui/core';
import Locate from '../Locate/Locate';
import SearchAppBar from '../Locate/Locate';
import { spacing } from '@material-ui/system';
import Geolocation from "react-geolocation";
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Register from './Register';
const AnyReactComponent = ({ text}) => <div>{text}</div>;

const styles = theme => ({
    root: {
        height: '100vh',
    },
    // image: {
    //     backgroundImage: 'url(https://media2.govtech.com/images/940*630/Bahamas3.jpg)',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    // },
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

const x = document.getElementById("demo")

 class Map extends Component {
   static defaultProps = {
     center: {
       lat: 40.7128,
       lng: -74.0060
     },
     zoom: 10
   };

     constructor(props) {
         super(props)
         this.state = {
            toggleChat: false,
            isOpen: false,
            //setOpen: false,
            mapVisible: true,
            latitude: "",
            longitude: "",
         }
     }

    handleSubmit = async (event) => {
        console.log("HIIII")
        const apiLink = "https://localhost:4000/api/location/gps";
        event.preventDefault();
        let coordinates = {
            latitude: this.state.latitude,
            longitude: this.state.longitude
        }

        await axios.put("https://localhost:4000/api/find/local", coordinates)
        .then(data => {
            console.log(data)
            this.setState({
                marker: data.response
            })
        })

        let res = await axios.post(apiLink, coordinates)
        if(!res.data.success){
            alert("Invalid coordinates!")
        }

        else{
            console.log("Success!")
        }

    }

     toggleMap() {    
         this.setState({
           mapVisible: !this.state.mapVisible
         }, () => {
           if (this._googleMap !== undefined) {
             this._googleMap.heatmap.setMap(this.state.heatmapVisible ? this._googleMap.map_ : null)
           }      
         })
     }
    handleKeyPress = event => {
        if(event.key === 'Enter') {
          this.handleChatSubmit();
        }
    }

    handleToggle = () => {
        this.setState({
          toggleChat: !this.state.toggleChat
        });
    };
     render() {
         const apiKey = { key: "AIzaSyABlJ4jGNiDwkSJftHdrDjfXrtCs0ECrrs" }
         const{classes} = this.props
         console.log(this.state)
         return (
            <div>
            <div style={{ height: '85vh', width: '100%' }}>
                <GoogleMapReact
                    ref={(el) => this._googleMap = el}
                    bootstrapURLKeys={apiKey}
                    defaultCenter={this.props.center}
                    yesIWantToUseGoogleMapApiInternals
                    defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                    lat={this.state.latitude}
                    lng={this.state.longitude}
                    text = "<You Are Here>"
                />
                </GoogleMapReact>
                
            </div>
                <div >
                    <Toolbar>
                        <Typography variant="h3" noWrap style={{width: '25%' }} align="center">
                            H A V E N
                        </Typography>
                        <Geolocation
                            render={({
                                fetchingPosition,
                                position: { coords: { latitude, longitude } = {} } = {},
                                error,
                                getCurrentPosition
                            }) =>
                                <div>
                                <Button
                                    type="submit"
                                    style={{height:'75hv', width: '100%' }}
                                    variant="outlined" 
                                    color="primary"
                                    className={classes.submit}
                                    onClick={()=>{
                                        this.setState({
                                           latitude: latitude,
                                           longitude: longitude 
                                        })
                                        getCurrentPosition()
                                    }}
                                >
                                    Locate Me
                                </Button>
                                {error &&
                                    <div>
                                    {error.message}
                                    </div>}
                                <pre>
                                </pre>
                                </div>}
                        />
                        <Button
                            type="submit"
                            //fullWidth
                            style={{height:'100%', width: '25%' }}
                            variant="outlined" 
                            color="primary"
                            className={classes.submit}
                        >
                        Add Property
                        </Button>
                        <Button
                            type="submit"
                            style={{height:'100%', width: '25%' }}
                            //fullWidth
                            variant="outlined" 
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmit}
                        >
                        Shelters Near Me
                        </Button>
                        {/* <FormDialog/> */}
                        <Button variant="outlined" color="primary" onClick={this.handleToggle}>
                            Open Chat Bot
                        </Button>
                        <Dialog open={this.state.toggleChat} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Chat Bot</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                Hello I'm helping Bear, ask me anything!
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="chat"
                                label="ask something"
                                type="chat"
                                fullWidth
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={this.handleToggle} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleToggle} color="primary">
                                Send
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </Toolbar>
                </div>
            </div>
         );
     }
 }
  
 export default withRouter(withStyles(styles)(Map))