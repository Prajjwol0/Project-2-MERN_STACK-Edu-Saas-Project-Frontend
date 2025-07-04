


/*
Slice vaneko basically euta thulo store ko partition ho vanera bujna sakinxa!!

Reducer ko nam j xa action ko name pani tehi hunxa
*/

import { createSlice } from '@reduxjs/toolkit'

interface IUserInitialState {
    name: string | null,
    address: string | null
}

const userInitialState: IUserInitialState = {
    name: null,
    address: null
}

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        name: "Prajjwol",
        address: "Nepal"
    },
    reducers: {
        // state refers to the current slice state
        // action contains any payload you dispatch
        setName(state, action) {
            state.name = "Prajjwol"
        },
        setAddress(state, action) {
            state.address = "Kavre"
        }
    }
})

// Exporting actions for use in components or dispatches
export const { setName, setAddress } = userSlice.actions

export default userSlice.reducer


  
// State --> Mathi ko initialState
// Action --> Trigger garda pathauna data aaune kura
