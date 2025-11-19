import React from 'react'
import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
export default function ButtonHome() {
   const navigate = useNavigate();
   const locaction=useLocation();
   const role=localStorage.getItem("role");
   if(role !=="user"){
    return null;
   }
   if(locaction.pathname==="/home")
    return null;
  return (
    <div>
           <Button onClick={() => navigate('/home')} variant="primary">HomeToPage</Button>
    </div>
  )
}
