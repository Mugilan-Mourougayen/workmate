import React, { useEffect } from 'react'

const Page3 = () => {
  useEffect(()=>{
fetch("http//localhost:5000/user/:_id")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  },[])
  return (
    <div>Page3</div>
  )
}

export default Page3