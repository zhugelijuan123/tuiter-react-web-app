import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk, deleteTuitThunk,createTuitThunk,updateTuitThunk}
  from "../../services/tuits-thunks";

const initialState = {
   tuits: [],
   loading: false
}

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
 name: 'tuitsData',
 initialState,
 extraReducers: {
    [findTuitsThunk.pending]:
       (state) => {
          state.loading = true
          state.tuits = []
    },
    [findTuitsThunk.fulfilled]:
       (state, { payload }) => {
          state.loading = false
          state.tuits = payload
    },
    [findTuitsThunk.rejected]:
       (state, action) => {
          state.loading = false
          state.error = action.error
    },
    [deleteTuitThunk.fulfilled] :
          (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits
            .filter(t => t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
          (state, { payload }) => {
            state.loading = false
            state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
        state.tuits[tuitNdx] = {
          ...state.tuits[tuitNdx],
          ...payload
        }
      }
  },
 reducers:{ }

});

export const {tuitLikedToggle, tuitLikesControl, createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;