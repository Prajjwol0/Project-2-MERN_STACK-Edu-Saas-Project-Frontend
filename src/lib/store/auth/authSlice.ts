import { createSlice } from "@reduxjs/toolkit"
import { Status } from "../../types/type"
import { IInititalState } from "./authSliceType"


const initialState:IInititalState={
user:{
    username:"",
    password:""
},
status:Status.LOADING
}

createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setUser(state:IInititalState.action:PayloadAction<IUserData>){
          state.user  
        }
    }
})