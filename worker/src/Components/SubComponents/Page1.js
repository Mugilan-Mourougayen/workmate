import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useEffect} from "react"
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'


const Page1 = () => {
  const [jobtype, setJobtype] = React.useState();
  const [jobTypelist, setJobTypelist] = React.useState([]);
  const details = useSelector((state) => state.details.value)

  const register=()=>{
    let data = {specilization:jobtype} 
    fetch(`http://localhost:5000/worker/register/${details._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
      })
      .catch(error => {
        // Handle any errors
      });
    
  }
 useEffect(()=>{
  const fetchlist = async () => {
    try {

    const data = await fetch("http://localhost:5000/category/getall");
    const json = await data.json();
    setJobTypelist(json.list)
    console.log(json)
    }
    catch(err){
      console.log(err)
    }
  }


  fetchlist()

 },[])
  return (
    <div>
      {details.specialization[0]}
      <br/>
      choose your preference : 
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
    <br/>
<Button variant='contained' onClick={()=>register()}>Register</Button>
    </div>
  )
}

export default Page1