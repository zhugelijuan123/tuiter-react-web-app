import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "../../images/nasa.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
  "title":"With experience in optimization algorithms like ALNS and DMIP, I have the technical expertise to drive impactful reate and iterate onlible value.",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers:{
     tuitLikedToggle(state, action) {
        const todo = state.find((todo) =>
                        todo._id === action.payload._id)
        todo.liked = !todo.liked
     },
     tuitLikesControl(state, action){
        const todo = state.find((todo) =>
                             todo._id === action.payload._id)
        if (todo.liked === false){
        todo.likes -= 1
        }
        else
        {
           todo.likes += 1
        }
     },
     createTuit(state, action) {
          state.unshift({
            ...action.payload,
            ...templateTuit,
            _id: (new Date()).getTime(),
          })
     },
     deleteTuit(state, action) {
          const index = state
             .findIndex(tuit =>
                tuit._id === action.payload);
          state.splice(index, 1);
        }

 }

});

export const {tuitLikedToggle, tuitLikesControl, createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;