import React from "react";
import "../home/index.css";
import HomeTuitItem
  from "./home-tuit-item";
import {useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";


const HomeNewComponent = () => {
 const homepostsArray = useSelector(state => state.tuits)
 return(
   <>
       <h4>Home</h4>
       <WhatsHappening/>
       <ul className="list-group">
         {
           homepostsArray.map(post =>
             <HomeTuitItem
               key={post._id} post={post}/> )
         }
       </ul>
   </>
 );
};
export default HomeNewComponent;

