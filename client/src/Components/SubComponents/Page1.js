import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { Button } from '@themesberg/react-bootstrap';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'

const Page1 = () => {
  const [checked, setChecked] = useState(false);
  const [jobtype, setJobtype] = React.useState();
  const [description, setDescription] = React.useState();
  const [address, setAddress] = React.useState();
  const [count, setCount] = React.useState(1);
  const [publisher,setPublisher]= React.useState();
  const details = useSelector((state) => state.details.value)

  const handleSliderChange = (event, newValue) => {
    setCount(newValue);
  };
useEffect(()=>{
  console.log(details)
},[])
  const handleChange = (event) => {
    setChecked(event.target.checked);
    
  };

  const trigger=()=>{
    setPublisher()
    fetch("http://localhost:5000/jobs/postjob", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        jobType: jobtype,
        description: description,
        address: address,
        countworker: count,
        requiements: checked,
        status:true,
        publisher:details._id
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
      alert("Job Posted successfully")
      setChecked(false);
      setDescription("");
      setJobtype("");
      setAddress("");
      setCount("");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error in Posting address")
    });
    

    console.log(
      `type: ${jobtype}
      Description: ${description}
      Address: ${address}
      cont: ${count}
      check: ${checked}
      
      
      `
    )
  }

  const jobTypelist = ["plumber","caarpenter","electrictian","astronet"]
  return (
    <div>
<Grid container  spacing={3}
  direction="column"
  alignItems="center"
  justifyContent="space-between"
  >
    
  <Grid item>
  <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={jobTypelist}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Job Type" />}
      value={jobtype}
      onChange={(event, newValue) => {
        setJobtype(newValue);
      }}
    />

  </Grid>
  <Grid item>
  <TextField
label="Description"
multiline
rows={10}
sx={{ width: 300 }}
onChange={(e) => {
  setDescription(e.target.value);
}}
value={description}
variant="outlined"/>
  </Grid>
  <Grid item>
    
<TextField
label="Address"
multiline
sx={{ width: 300 }}
onChange={(e) => {
  setAddress(e.target.value);
}}
value={address}
rows={3}
variant="outlined"/>
  </Grid>
  <Grid item>
  <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
        No of Worker required
      </Typography>
    
          <Slider
            value={typeof count === 'number' ? count : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={1}
            marks
            min={1}
            max={15}
            valueLabelDisplay="auto"
            // sx={{ width: 300 }}
          />
</Box>
  </Grid>
  <Grid item>
  <FormControlLabel  
           control={ <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />} l
    label="Do you required the products" />
  </Grid>

</Grid>




<Button onClick={trigger}>submit</Button>
    </div>
  )
}

export default Page1