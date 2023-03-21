import React from "react";
import "../home/index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const ProfileComponent = () => {
 const profileInfo = useSelector(state => state.profile)

 return(
   <>
       <h1>{profileInfo.firstName} {profileInfo.lastName}</h1>
       <a>6,114 Tweets</a>
       <div>
                     <img className="picture_pos_1_ori width_pic1 " src = {profileInfo.bannerPicture}/>
                     <img className="picture_pos_2_ori rounded-circle width_pic2" src = {profileInfo.profilePicture}/>
                      <Link to="/tuiter/edit-profile"  className="wd-text-decoration button_pos_ori">
                             <button type = 'button' className="rounded-pill wd-backgroundcolor-white wd-border-darkgray">Edit Profile</button>
                             </Link>
       </div>
       <div className="element_pos_ori">
       <h3>{profileInfo.firstName} {profileInfo.lastName}</h3>
       <a>{profileInfo.handle}</a>
       <p>{profileInfo.bio}</p>
           <div className="row">
                <div className="col-4">
                    <img className = "wd-icon-size" src="../../images/location.png"/>
                    {profileInfo.location}
                </div>
                <div className="col-4">
                    <img className = "wd-icon-size" src="../../images/birth.png"/>
                    {profileInfo.dateOfBirth}
                </div>
                <div className="col-4">
                    <img className = "wd-icon-size" src="../../images/calendar.png"/>
                    {profileInfo.dateJoined}
                </div>
           </div>
           <br>
           </br>
           <p>
           {profileInfo.followingCount} Following &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profileInfo.followersCount} Followers
           </p>
       </div>



   </>
 );
};
export default ProfileComponent;

