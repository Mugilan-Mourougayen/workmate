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
import Modal from '@mui/material/Modal';
import Applyjob from './Modalcomponents/Applyjob';
import ViewPublisher from './Modalcomponents/ViewPublisher';



// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function Page2() {
  const [joblist,setJoblist]=useState([])
  const details = useSelector((state) => state.details.value)
  const [openapply, setOpenapply] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null); 

  const handleOpenapply = (job) => {
    setSelectedJob(job);
    setOpenapply(true);
  };
  const handleOpenview = (job) => {
    setSelectedJob(job);
    setOpenview(true);
  };
  const handleCloseapply = () => setOpenapply(false);

  const [openview, setOpenview] = useState(false);
 
  const handleCloseview = () => setOpenview(false);

  let joboption = {options:details.specialization}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/jobs/joboption', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(joboption),
        });
        
        if (response.ok) {
          const data = await response.json();
          setJoblist(data);
        } else {
          throw new Error('Failed to fetch job options');
        }
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
<>
      <Modal
        open={openapply}
        onClose={handleCloseapply}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       {selectedJob ? <Applyjob job={selectedJob} />: <>hello</>}
      </Modal>

      <Modal
        open={openview}
        onClose={handleCloseview}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       {selectedJob ? <ViewPublisher job={selectedJob}/> : <>hello</>}
    
      </Modal>



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
        <Button size="small" onClick={()=>handleOpenapply(item)}>apply for this job</Button>
        <Button size="small" onClick={()=>handleOpenview(item)}>view publisher</Button>
      </CardActions>
    </Card>
    </div>
  ))}

</>
   
  );
}