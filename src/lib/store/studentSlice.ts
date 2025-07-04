import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIncomingUserPayload, IInitialStudentData } from "./type";


const initialStudentData:IInitialStudentData = {
    data : ""
}

const studentSlice = createSlice({
    name : "studentSlice", 
    initialState :initialStudentData, 
    reducers : {
        setData(state:IInitialStudentData, action:PayloadAction<string|number>){
            state.data = action.payload // {
//     name : "prajjwol", 
//     address : "nepal"
// }
        }, 
    }
})
// reducerName -- actionName
const {setData} = studentSlice.actions
// dispatch(setData({
//     name : "prajjwol", 
//     address : "nepal", 
//     age : 10 
// })) 
export {setData}
export default studentSlice.reducer

function setName(){

}
setName("prajjwol")

// 

