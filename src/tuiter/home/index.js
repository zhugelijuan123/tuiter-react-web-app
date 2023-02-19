import React from "react";
import "./index.css";
import homepostsArray from './homeposts.json';
import PostItem
  from "./post-item";

const HomeComponent = () => {
 return(
   <ul className="list-group">
     {
       homepostsArray.map(post =>
         <PostItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default HomeComponent;

