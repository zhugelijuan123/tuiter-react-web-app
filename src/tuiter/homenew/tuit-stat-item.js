import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTuitThunk}
  from "../../services/tuits-thunks";



const TuitStatItem = (post) => {

 const dispatch = useDispatch();

 return(
  <li className="list-group-item border-top-0">
     <div className="display-flex">
     <div className="col-2">
     </div>
     <div className = "col-10 ">
                 <img  className = "wd-icon-size" src="../../images/comment.png"/>
                              <a className = "wd-color-lightgray wd-text-decoration ">&nbsp;{post.post.replies}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                                                            <img className = "wd-icon-size" src="../../images/forward.png"/>
                                                            <a className = " wd-color-lightgray wd-text-decoration">&nbsp;{post.post.retuits}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                                                            <img onClick={() => dispatch(updateTuitThunk({
                                                                                ...post.post,
                                                                                liked:!post.post.liked,
                                                                                likes:post.post.liked?post.post.likes-1:post.post.likes+1
                                                                              }))}
                                                               className = "wd-icon-size"
                                                               src={`${post.post.liked?"../../images/like.png":"../../images/likewhite.png"}`}/>
                                                            <a className = "wd-color-lightgray wd-text-decoration">&nbsp;{post.post.likes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                                                            <img className = "wd-icon-size" src="../../images/share.png"/>
                                                            <a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                                                            <img onClick={() => dispatch(updateTuitThunk({
                                                                                                                        ...post.post,
                                                                                                                        disliked:!post.post.disliked,
                                                                                                                        dislikes:post.post.disliked?post.post.dislikes-1:post.post.dislikes+1
                                                                                                                      }))}
                                                                                                   className = "wd-icon-size"
                                                                                                   src={`${post.post.disliked?"../../images/dislikeyellow.png":"../../images/dislikewhite.jpeg"}`}/>
                                                                                                <a className = "wd-color-lightgray wd-text-decoration">&nbsp;{post.post.dislikes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>

     </div>
     </div>
  </li>
 );
};
export default TuitStatItem;

