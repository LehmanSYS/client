// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Paper from '@material-ui/core/Paper';
// import Draggable from 'react-draggable';
// import TextField from '@material-ui/core/TextField';

// function PaperComponent(props) {
//   return (
//     <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
//       <Paper {...props} />
//     </Draggable>
//   );
// }

// class AddProperty extends React.Compoent {
//     constructor(props) {
//         super(props)
//         this.state = {        
//           isOpen: false
//         }
//       }
    
// //   const [open, setOpen] = React.useState(false);

//   handleOpen = () => {
//     this.setState({isOpen: true});
//   };

//   handleClose = () => {
//     this.setState({isOpen: false});
//   };

//   render() {
//       //const{open} = this.state
//     return (
//         <div>
//           <Button variant="outlined" color="primary" onClick={this.handleOpen}>
//             Change Location
//           </Button>
//           <Dialog
//             open={this.state.isOpen}
//             onClose={this.handleClose}
//             PaperComponent={PaperComponent}
//             aria-labelledby="draggable-dialog-title"
//           >
//             {/* <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
//               Subscribe
//             </DialogTitle> */}
//             <Button color="primary" onClick={this.handleOpen}>
//               Locate Me
//             </Button>
//             <DialogContent>
//               {/* <DialogContentText>
//                 Location
//               </DialogContentText> */}
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 //required
//                 fullWidth
//                 name="location"
//                 label="Location"
//                 type="location"
//                 id="location"
//                 autoComplete="current-location"
//               />
//             </DialogContent>
//             <DialogActions>
//               <Button autoFocus onClick={this.handleClose} color="primary">
//                 Cancel
//               </Button>
//               <Button onClick={this.handleClose} color="primary">
//                 Search
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </div>
//       );
//   }
// }

// export default AddProperty;
