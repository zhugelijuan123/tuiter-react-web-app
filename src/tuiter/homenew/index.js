import React, {useEffect} from "react";
import "../home/index.css";
import HomeTuitItem
  from "./home-tuit-item";
import {useDispatch, useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";
import TuitStatItem from "./tuit-stat-item";
import {findTuitsThunk}
  from "../../services/tuits-thunks";



const HomeNewComponent = () => {
 const {tuits, loading} = useSelector(state => state.tuitsData)
 console.log(loading)
 console.log(tuits)
 const dispatch = useDispatch();
 useEffect(() => {
    dispatch(findTuitsThunk())
 }, [])

 return(
   <>
       <h4>Home</h4>
       <WhatsHappening/>
       <ul className="list-group">
         {
              loading &&
              <li className="list-group-item">
                Loading...
              </li>
         }
         { !loading &&
           tuits.map(post =>
           <div>

             <HomeTuitItem
                            key={post._id} post={post}/>
             <TuitStatItem
                                         key={post._id} post={post}/>

                           </div>
             )
         }

       </ul>
   </>
 );
};
export default HomeNewComponent;

