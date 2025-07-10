import { IInstituteInitialData } from "./instituteSlice.types"

const initialState:IInstituteInitialData={
    insitute:{
        instituteAddress:"",
        instituteEmail:"",
        institutePhoneNumber:"",
        instituteAddress:""
    }
}
createSlice({
    name:"institutte"
})