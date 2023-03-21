import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {tuitLikedToggle, tuitLikesControl} from "../tuits/tuits-reducer";



const TuitStatItem = (inferid) => {

 const dispatch = useDispatch();
 const toggleTodoDone = () => {
    dispatch(tuitLikedToggle({_id:inferid.inferid._id}))
    dispatch(tuitLikesControl({_id:inferid.inferid._id}))
    console.log(inferid.inferid.likes)
  }

 return(
  <li className="list-group-item border-0">
     <div className = "display-flex">
                 <img  className = "wd-icon-size" src="../../images/comment.png"/>
                 <a className = "wd-color-lightgray wd-text-decoration ">&nbsp;{inferid.inferid.replies}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                 <img className = "wd-icon-size" src="../../images/forward.png"/>
                 <a className = " wd-color-lightgray wd-text-decoration">&nbsp;{inferid.inferid.retuits}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                 <img onClick={() =>toggleTodoDone()}
                    className = "wd-icon-size"
                    src={`${inferid.inferid.liked?"../../images/like.png":"../../images/likewhite.png"}`}/>
                 <a className = "wd-color-lightgray wd-text-decoration">&nbsp;{inferid.inferid.likes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                 <img className = "wd-icon-size" src="../../images/share.png"/>
     </div>
  </li>
 );
};
export default TuitStatItem;

