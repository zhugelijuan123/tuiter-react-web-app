import {React,useState} from "react";
import "./index.css";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {updateProfile} from "../profile/profile-reducer";


const EditProfile = () => {
 const profileInfo = useSelector(state => state.profile)
 const [firstNameEdition, setfirstNameEdition] = useState(profileInfo.firstName);
  const [lastNameEdition, setlastNameEdition] = useState(profileInfo.lastName);
 const [bioEdition, setbioEdition] = useState(profileInfo.bio);
 const [locationEdition, setlocationEdition] = useState(profileInfo.location);
 const [websiteEdition, setwebsiteEdition] = useState(profileInfo.website);
 const [birthEdition, setbirthEdition] = useState(profileInfo.dateOfBirth);
 const info = {firstName:firstNameEdition,lastName:lastNameEdition,bio:bioEdition,location:locationEdition,website:websiteEdition,dateOfBirth:birthEdition}
 const dispatch = useDispatch();
 const updateProfileHandler = () => {
    dispatch(updateProfile(info))
 }

 return(
   <>
       <div className="row">
           <div className="col-1">
              <Link to="/tuiter/profile"  className="wd-text-decoration ">
                <img className="wd-icon-size float-left" src="../../images/cross.png"/>
              </Link>
           </div>
           <div className="col-9">
               <h3>Edit profile</h3>
           </div>
           <div className="col-2 float-right">
               <Link to="/tuiter/profile"  className="wd-text-decoration ">
                    <button onClick={updateProfileHandler} type = 'button' className="black_background text-white rounded-pill wd-backgroundcolor-white wd-border-darkgray">Save</button>
               </Link>
           </div>
       </div>
       <div>
                     <img className="picture_pos_1 width_pic1 " src = {profileInfo.bannerPicture}/>
                     <img className="picture_pos_2 rounded-circle width_pic2" src = {profileInfo.profilePicture}/>

       </div>
       <div className="element_pos">
            <div className="wd-border-darkgray row width_morehalf">
                       <a>firstName</a><br></br>
                       <input className="border-0 " value={firstNameEdition} onChange={(e) => setfirstNameEdition(e.target.value)} />
                   </div>
                   <br></br>
            <div className="wd-border-darkgray row width_morehalf">
                <a>lastName</a><br></br>
                <input className="border-0 " value={lastNameEdition} onChange={(e) => setlastNameEdition(e.target.value)}/>
            </div>
            <br></br>
            <div className="wd-border-darkgray row width_morehalf">
                <a>Bio</a><br></br>
                <textarea className="border-0 " value={bioEdition} onChange={(e) => setbioEdition(e.target.value)}  />
            </div>
            <br></br>
            <div className="wd-border-darkgray row width_morehalf">
                <a>Location</a><br></br>
                <textarea className="border-0 " value={locationEdition} onChange={(e) => setlocationEdition(e.target.value)}/>
            </div>
            <br></br>
            <div className="wd-border-darkgray row width_morehalf">
                <a>Website</a><br></br>
                <textarea className="border-0 " value={websiteEdition} onChange={(e) => setwebsiteEdition(e.target.value)}/>
            </div>
            <br></br>
            <div className="wd-border-darkgray row width_morehalf">
                <a>Birth date</a><br></br>
                <input type="date" className="border-0 " value={birthEdition} onChange={(e) => setbirthEdition(e.target.value)} />
            </div>

       </div>



   </>
 );
};
export default EditProfile;

