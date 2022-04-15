import React from "react"
import logo from "../images/logo_size_invert.jpg"
import { useNavigate } from "react-router-dom"
const Nav = () => {
    const navigate = useNavigate()
    return(
      <nav>
          <div className="logo-container">
            <img src={logo} alt="logo"/>
          </div>
          <div className="controls-container">
            <div className="icon" onClick={()=> navigate('/ticket')}>➕ </div>
            <div className="icon" onClick={()=> navigate('/')}>🔙 </div>
          </div>
      </nav>
     )
  
   }
  
  export default Nav