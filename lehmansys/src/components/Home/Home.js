 /* global google */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Button,Modal, DialogContent, TextField, Toolbar, AppBar, Typography} from '@material-ui/core';
import Locate from '../Locate/Locate';
import SearchAppBar from '../Locate/Locate';
//import AppBar from '@material-ui/core/AppBar';
import DraggableDialog from '../Locate/Test';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
            locateMe: false
            //  heatmapVisible: true,
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
 
    //  toggleHeatMap() {    
    //      this.setState({
    //        heatmapVisible: !this.state.heatmapVisible
    //      }, () => {
    //        if (this._googleMap !== undefined) {
    //          this._googleMap.heatmap.setMap(this.state.heatmapVisible ? this._googleMap.map_ : null)
    //        }      
    //      })
    //  }
    toggleLocate = () => {
        this.setState({
          locateMe: !this.state.locateMe
        });
    };
     render() {
         const apiKey = { key: "AIzaSyABlJ4jGNiDwkSJftHdrDjfXrtCs0ECrrs" }
        //  const heatMapData = {
        //      positions: this.state.heatmapPoints,
        //      options: {
        //          radius: 20,
        //          opacity: 0.6
        //      }
        //  }
         console.log(this.state)
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
                 {/* display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center; */}
                    <Typography variant="h6" noWrap style={{width: '25%' }} display="flex" justifyContent="center" direction="column" alignItem="center">
                        LehmanSYS
                    </Typography>
                    <Typography variant="h6" noWrap style={{width: '25%' }} align="center">
                        Add Property
                    </Typography>
                    <Typography variant="h6" noWrap style={{width: '25%' }} align="center">
                        Locate Me
                    </Typography>
                    <Typography variant="h6" noWrap style={{width: '25%' }} align="center">
                        Chat
                    </Typography>
                 </Toolbar>
            </div>
         </div>
         );
     }
 }
  
 export default Map;