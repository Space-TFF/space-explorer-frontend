import React from 'react';
import SelectEventCard from "../Eclipse/SelectEventCard";
import SideDrawer from "../Eclipse/SideDrawer.js";
import './Home.css';
import AddEvent from "../Eclipse/AddEvent.js"
import Button from '@mui/material/Button';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      openAdd: false,
      openEvent:false,
      openDrawer:false,
      name:"Event Name",
      description:" Join us for this amazing event. Wide panoramic views. Live Music! Vendors include Red Bull and SpaceX.",
      city:'',
      state:'',
      additionalInfo:''

    }};

  handleClickOpen = () => {
    this.setState({openAdd:true});
  };
  handleClickClose = () => {
    this.setState({openAdd:false})
  };

  openSelectEvent = () => {
    this.setState({openEvent:true});
  };
  closeSelectEvent = () => {
    this.setState({openEvent:false})
  };

  closeSelectEvent = () => {
    this.setState({openEvent:false})
  };
  openDrawerEvent = () => {
    this.setState({openDrawer:true});
  };

  closeSelectEventAdd = () => {
    this.setState({openDrawer:false});
    this.openSelectEvent();
  };

  render() {
    return (
      <>
        <div>
        <Button variant="outlined" onClick={this.openSelectEvent}>
        Open Select Event dialog
      </Button>
         {(this.state.openEvent) &&  <SelectEventCard
            name={this.state.name}
            description={this.state.description}
            open={this.state.openEvent}
            handleClickClose={this.closeSelectEvent}
            handleClickCloseAdd={this.closeSelectEventAdd}
            />
         }
         <p> </p>
        <Button variant="outlined" onClick={this.handleClickOpen}>
        Open Add Event dialog
         </Button>
            <AddEvent
            name="Event Name"
            description="Description"
            city="City"
            state="State"
            email="email"
            open={this.state.openAdd}
            handleClickClose={this.handleClickClose}
            />
            <p> </p>
            <Button variant="outlined" onClick={this.openDrawerEvent}>Drawer</Button>
          <SideDrawer
          name={this.state.name}
          description= {this.state.description}
          city="City"
          state="State"
          additionalInfo="Additional Info"
          open={this.state.openDrawer}
          handleClickClose={this.closeDrawerEvent}
          />
        </div>
        <p>This is the Home Page</p>
      </>
    );
  }
}

export default Home;