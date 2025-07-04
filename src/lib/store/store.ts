


// collect all slices and store 

import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import studentSlice from './studentSlice'
import teacherSlice from './teacherSlice'
const store = configureStore({
  reducer: {
    user: userSlice,
    student: studentSlice,
teacher:teacherSlice
  }
});




export default store 

// dispatch ko type --> paxi kaam lagxa hamilai 
// dispatch(setName()) --> dispatch() : AppDispatch
export type AppDispatch =  typeof store.dispatch
export type RootState=ReturnType<typeof store.getState>

// react-redux -- package 
// next - reduxToolkit 

// differents hook provide garxa :useSelector (), useDispatch()