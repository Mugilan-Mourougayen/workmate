

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
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Page2() {
  const [joblist,setJoblist]=useState([])
  const details = useSelector((state) => state.details.value)
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
    joblist.length > 0 && joblist.map((item, index) => (
    <div key={index}>
     
     <Card sx={{ minWidth: 275,maxWidth:500 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        {item.jobType}  <Badge style={{paddingLeft:"50px"}} color="primary" badgeContent={item.countworker}>
  <EngineeringIcon />
</Badge>
        </Typography>
        <br/>
        <Typography variant="body2">
         {item.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} style={{color: item.requiements ? "green" : "red" }} >
          requiements :{item.requiements ? "Needed" : "Not Needed"}
        </Typography>
     
        <Typography sx={{ mb: 1.5 }}  >
          Date posted :{moment(item.date).format('MMMM Do, YYYY, h:mm:ss A')}
        </Typography>
        address: {item.address}
      </CardContent>
      <CardActions>
        <Button size="small">View Offers</Button>
        <Drawercomp job={item}/>
      </CardActions>
    </Card>
  
    </div>
  ))}

</>
   
  );
}