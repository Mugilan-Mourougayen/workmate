import { Button } from '@themesberg/react-bootstrap'
import React from 'react'
import { useNavigate } from "react-router-dom";
const Page4 = () => {
  const navigate = useNavigate();
  const logout=()=>{
    // window.localStorage.getItem(key);
    window.localStorage.removeItem("token")
    return navigate("/");
  }
  return (
    <div>
      <Button onClick={logout}>logout</Button>
    </div>
  )
}

export default Page4