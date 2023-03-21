import React from "react";
import {useDispatch} from "react-redux";
import TuitStatItem from "./tuit-stat-item";
import {deleteTuit} from "../tuits/tuits-reducer";



const HomeTuitItem = (
 {
   post = {
              "_id": 123,
              "topic": "Space",
              "userName": "SpaceX",
              "time": "2h",
              "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
              "image": "../../spacex.jpeg",
              "liked": true,
              "replies": 123,
              "retuits": 432,
              "likes": 2345,
              "handle": "@spacex",
              "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
            }
 }
) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}
 return(
  <li className="list-group-item">
   <div class = "mt-2 display-flex">
         <div class="col-2">
         <img class="wd-border-all-darkgray ms-2 mt-3 rounded-pill wd-img-width-60px" src={`${post.image}`}/>
         </div>
         <div class="col-10 ms-2 ">
            <div>
            <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(post._id)}></i>
             <a class="text-black wd-font-bold wd-text-decoration">{post.userName}️</a>
             <a class="wd-color-darkgray wd-text-decoration"> ☑️ {post.handle} . {post.time}</a>
             <p class = "wd-color-darkgray wd-text-decoration"> {post.tuit}</p>
             <TuitStatItem inferid={post}/>
             </div>
         </div>
     </div>
  </li>
 );
};
export default HomeTuitItem;

