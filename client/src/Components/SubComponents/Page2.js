

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react'
import EngineeringIcon from '@mui/icons-material/Engineering';
import Badge from '@mui/material/Badge';
import moment from 'moment';
import { useSelector } from 'react-redux'
import Drawercomp from "../SubComponents/MiniComponents/Drawercomp"
import { BottomNavigation, colors } from '@mui/material';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import zIndex from '@mui/material/styles/zIndex';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import "./Page.css"
const customStyles = {
  content: {
    // position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%" ,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');




export default function Page2() {
  const [joblist,setJoblist]=useState([])
  const details = useSelector((state) => state.details.value)
  const [joboffer,setJoboffer]= useState()
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  const vOffer=(itm)=>{
    setJoboffer(itm.options);
    console.log("inga paru ",joboffer)
    openModal();
  }


  function closeModal() {
    setIsOpen(false);
  }

    useEffect(()=>{
    fetch(`http://localhost:5000/jobs/getmyjob/${details._id}`, {
   headers: {
      'Accept': 'application/json'
   }
})
   .then(response => response.json())
   .then(data => {
    console.log(data)
    setJoblist(data)
  })
  },[])
  return (
<>

  {
    joblist.length > 0 && joblist.map((itm, index) => (
    <div key={index}>
     
     <Card sx={{ minWidth: 275,maxWidth:500 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        {itm.jobType}  <Badge style={{paddingLeft:"50px",zIndex:0}} color="primary" badgeContent={itm.countworker}>
  <EngineeringIcon />
</Badge>
        </Typography>
        <br/>
        <Typography variant="body2">
         {itm.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} style={{color: itm.requiements ? "green" : "red" }} >
          requiements :{itm.requiements ? "Needed" : "Not Needed"}
        </Typography>
        <Typography sx={{ mb: 1.5 }}  >
          Date posted :{moment(itm.date).format('MMMM Do, YYYY, h:mm:ss A')}
        </Typography>
        address: {itm.address}
      </CardContent>
      <CardActions>
       <Button onClick={()=>vOffer(itm)}>view Offers</Button>
      </CardActions>
    </Card>
  
    </div>
  ))}





  {/* /// Modal /// */}



  <div>
    
      <Modal
        isOpen={modalIsOpen}
    
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div>
         {console.log("g th tdh",joboffer)}
        {
          

          joboffer?.length > 0   ? 
          joboffer.map((itm, index) => (

            <div key={index}>
     
            <Card sx={{ minWidth: 275,maxWidth:500 }}>
             <CardContent>
               
               <Typography variant="h5" component="div">
               {itm.jobType}  <Badge style={{paddingLeft:"50px",zIndex:0}} color="primary" badgeContent={itm.countworker}>
         <EngineeringIcon />
       </Badge>
               </Typography>
               <br/>
               <Typography variant="body2">
                {itm.description}
               </Typography>
               <Typography sx={{ mb: 1.5 }} style={{color: itm.requiements ? "green" : "red" }} >
                 Requiements :{itm.requiements ? "Not Needed" : "Needed"}
               </Typography>
               <Typography sx={{ mb: 1.5 }}  >
                 Date posted :{moment(itm.date).format('MMMM Do, YYYY, h:mm:ss A')}
               </Typography>
               products Requiements:
               <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {itm.productsrequired.map((value) => {
        return (
          <>
          <ListItem
            key={value}
            disablePadding
            className='colortab'
            >
            {value}
          </ListItem>
          <Divider />
            </>
        );
      })}
    </List>
             </CardContent>
             <CardActions>
              <Button onClick={()=>vOffer(itm)}>view Offers</Button>
             </CardActions>
           </Card>
         
           </div>
         ))

:
<>sdsa</>
          }
  
       </div>
      </Modal>
    </div>

</>
   
  );
}