import { createSlice } from "@reduxjs/toolkit";
// Removed unused imports for clarity

const teacherSlice = createSlice({
    name: "teacherSlice",
    initialState: {
        teacherName: "",
        teacherPassword: ""
    },
    reducers: {
        setTeacherName(state, action) {
            state.teacherName = action.payload;
            // state.teacherName="haha"
        },
        setTeacherPassword(state, action) {
            state.teacherPassword = action.payload;
            // state.teacherPassword="hehe"
        }
    }
});

const { setTeacherName, setTeacherPassword } = teacherSlice.actions;

// CreateSlice functions always returns an object jaha vitra actions haru automatic generate vayera aairako hunxa

/* 
FLOW 

reducer ---> actionAsyncStorage
reducer ---> communication ---> action lai call garnu parxa  
jaile pani action call hunxa reducer hune haina 

 */

export { setTeacherName, setTeacherPassword };
export default teacherSlice.reducer;
