import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import "../home/index.css"
import {updateTuitThunk}
  from "../../services/tuits-thunks";

const HomeTuitItem = (post) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
   dispatch(deleteTuitThunk(id));
 }




 return(
  <li className="list-group-item border-bottom-0">
   <div className = "mt-2 display-flex ">
         <div className="col-2">
         <img className="wd-border-all-darkgray ms-2 mt-3 rounded-pill wd-img-width-60px" src={`${post.post.image}` } alt=""/>
         </div>
         <div className="col-10 ms-2 ">
            <div>
            <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(post.post._id)}></i>
             <a className="text-black wd-font-bold wd-text-decoration">{post.post.userName}️</a>
             <a className="wd-color-darkgray wd-text-decoration"> ☑️ {post.post.handle} . {post.post.time}</a>
             <p className = "wd-color-darkgray wd-text-decoration"> {post.post.tuit}</p>


                              </div>
         </div>
     </div>
  </li>
 );
};
export default HomeTuitItem;

