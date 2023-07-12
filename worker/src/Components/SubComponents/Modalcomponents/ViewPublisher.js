import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
  };
  
const ViewPublisher = (props) => {
    let {job}=props
    const [publisher,setPublisher]=useState()

    useEffect(()=>{
        console.log(job.publisher)
        fetch(`http://localhost:5000/user/${job.publisher}`)
        .then(res=>res.json())
        .then(data=>setPublisher(data))

    },[])
  return (
    <div>
      {publisher ? 
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {publisher.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {publisher.password}
          </Typography>
        </Box>
:
<Box sx={{ display: 'flex' }}>
<CircularProgress />
</Box>

      }
         
    </div>
  )
}

export default ViewPublisher












