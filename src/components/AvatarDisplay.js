import React from "react" 
import blankAvatar from '../images/istockphoto-666545204-612x612.jpeg'
const AvatarDisplay = ({ticket}) => {
    return(
      <div className="avatar-container">
        <div className="image-container">
          <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'photo of'+ ticket.owner}/>
        </div>
      </div>
     )
  
   }
  
  export default AvatarDisplay