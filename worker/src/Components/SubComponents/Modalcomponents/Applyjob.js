import React,{useState} from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Listadd from './Listadd';
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
  
const Applyjob = ({job}) => {
  
  const [cost, setCost] = React.useState();
  const [description, setDescription] = React.useState();
  const [checked, setChecked] = React.useState(true);
  const [messageList, setMessageList] = useState([]);
  const details = useSelector((state) => state.details.value)
  const submit =()=>{
    
let data = {
  days:days,
  cost:cost,
  description:description,
  availability:checked,
  applicant : details._id,
  applicantName:details.name,
  productsrequired:messageList,
}
console.log("id",data)
    fetch(`http://localhost:5000/jobs/apply/${job._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
       console.log(data)
      })
      .catch(error => {
console.log( error)      });




    console.log({
      days:days,
      cost:cost,
      description:description,
      availability:checked,
      applicant : details._id,
      applicantName:details.name,
      productsrequired:[messageList],


    })
  }
  const [days, setDays] = useState(1);

  const handleDays = (event, newValue) => {
    setDays(newValue);
  };
const handleChange = (event) => {
  setChecked(event.target.checked);
};
  return (
    <div>
         <Box sx={style}>
            cost of Job :  <TextField id="outlined-basic" size="small" label="cost of Job" value={cost} onChange={(e)=>setCost(e.target.value)} variant="outlined" /> <br/> <br/> 
            description :  <TextField id="outlined-basic" size="small" label="description"value={description} onChange={(e)=>setDescription(e.target.value)} variant="outlined" /> 
            Time taken in days :<Slider aria-label="Volume" value={days} onChange={handleDays} valueLabelDisplay="auto"/>
          
<br/>



 Has own Item: <Checkbox
    checked={checked}
    onChange={handleChange}
    inputProps={{ 'aria-label': 'controlled' }}
  />
  {
    !checked &&
    <>
    <br/>
    list the items required: 
    <Listadd messageList={messageList} setMessageList={setMessageList} />
    </>
  }
  <br/><br/><br/>
        <Button variant='contained' onClick={submit}>Submit</Button>
        </Box>


    </div>
  )
}

export default Applyjob