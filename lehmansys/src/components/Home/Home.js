 /* global google */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Button,Modal, DialogContent, TextField, Toolbar, AppBar, Typography} from '@material-ui/core';
import Locate from '../Locate/Locate';
import SearchAppBar from '../Locate/Locate';
//import AppBar from '@material-ui/core/AppBar';
//import DraggableDialog from '../Locate/Test';
import { spacing } from '@material-ui/system';
import Geolocation from "react-geolocation";
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
//import {usePosition} from '../Locate/useLocation';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
            locateMe: false,
            mapVisible: true,
            latitude: "",
            longitude: ""
            //  heatmapPoints: [
            //      {lat: 18.2208, lng: -66.5901},
            //      {lat: 18.1808, lng: -66.9799},
            //      {lat: 18.2275, lng: -65.9210},
            //      {lat: 18.1830, lng: -65.8663},
            //      {lat: 18.2269, lng: -66.3912},
            //      {lat: 18.1866, lng: -66.3063},
            //      {lat: 18.2388, lng: -66.0352},
            //      {lat: 18.1218, lng: -66.4986},
            //      {lat: 18.0534, lng: -66.5075},
            //      {lat: 18.1119, lng: -66.1660},
            //      {lat: 18.0037, lng: -66.0134},
            //      {lat: 18.2192, lng: -66.2256},
            //      {lat: 18.4445, lng: -66.2543},
            //      {lat: 18.3894, lng: -66.1653},
            //      {lat: 18.4465, lng: -66.1356},
            //      {lat: 18.2569, lng: -66.1029},
 
            //              //{lat: 59.96, lng: 30.32}
            //  ]
         }
     }
     
    //  onMapClick({x, y, lat, lng, event}) {
    //      if (!this.state.heatmapVisible) {
    //        return
    //      }
         
    //        this.setState({
    //            heatmapPoints: [ ...this.state.heatmapPoints, {lat, lng}]
    //        })
    //      if (this._googleMap !== undefined) {      
    //        const point = new google.maps.LatLng(lat, lng)
    //        this._googleMap.heatmap.data.push(point)
    //      }
    //  }

    handleSubmit = async (event) => {
        const apiLink = "http://"
        event.preventDefault();
        let coordinates = {
            latitude: this.state.latitude,
            longitude: this.state.longitude
        }

        let res = await axios.post(apiLink, coordinates)
        if(!res.data.success){
            alert("Invalid coordinates!")
        }

        else{
            console.log("Success!")
        }

    }

    handleState () {

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
    toggleLocate = () => {
        this.setState({
          locateMe: !this.state.locateMe
        });
    };
     render() {
         //const { latitude, longitude, timestamp, accuracy, error } = usePosition(true)
         const apiKey = { key: "AIzaSyABlJ4jGNiDwkSJftHdrDjfXrtCs0ECrrs" }
         const{classes} = this.props
        //  const heatMapData = {
        //      positions: this.state.heatmapPoints,
        //      options: {
        //          radius: 20,
        //          opacity: 0.6
        //      }
        //  }
         console.log(this.state)
         //console.log(this.getLocation())
         return (
            <div>
            <div style={{ height: '85vh', width: '100%' }}>
                <GoogleMapReact
                    ref={(el) => this._googleMap = el}
                    bootstrapURLKeys={apiKey}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    //heatmapLibrary={true}          
                    //heatmap={heatMapData}          
                    //onClick={this.onMapClick.bind(this)}
                >
                {/* <AnyReactComponent
                    lat={18.2208}
                    lng={-66.5901}
                    //text="My Marker"
                /> */}
                </GoogleMapReact>
                
            </div>
                <div >
                    <Toolbar>
                        <Typography variant="h6" noWrap style={{width: '25%' }} align="center">
                            LehmanSYS
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
                                    //fullWidth
                                    variant="contained"
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
                                    {/* latitude: {latitude}
                                    longitude: {longitude} */}
                                </pre>
                                </div>}
                        />
                        <Button
                            type="submit"
                            //fullWidth
                            style={{height:'100%', width: '25%' }}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            //onClick={this.handleSubmit}
                        >
                        Add Property
                        </Button>
                        <Button
                            type="submit"
                            style={{height:'100%', width: '25%' }}
                            //fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmit}
                        >
                        Shelters Near Me
                        </Button>
                        <Button
                            type="submit"
                            style={{height:'100%', width: '25%' }}
                            //fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            //onClick={this.handleSubmit}
                        >
                        Chat
                        </Button>
                    </Toolbar>
                </div>
            </div>
         );
     }
 }
  
 export default withRouter(withStyles(styles)(Map))