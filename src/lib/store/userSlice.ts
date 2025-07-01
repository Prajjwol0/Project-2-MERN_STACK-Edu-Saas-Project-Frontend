


/*
Slice vaneko basically euta thulo store ko partition ho vanera bujna sakinxa!!

Reducer ko nam j xa action ko name pani tehi hunxa
*/

import {createSlice} from '@reduxjs/toolkit'

createSlice({
 name:"userSlice",
 initialState:{
    name:"Prajjwol",
    address:"Nepal"
 },
 reducers:{ //Reducer: Kunai function jajsko through bata hami kehi programmed garxam
  
// State --> Mathi ko initialState
// Action --> Trigger garda pathauna data aaune kura

    setName(state,action){ // function ma sadhai duita kura aauxa: First-state, second-action
state.name="Prajjwol"
    },
    setAddress(state,action){
state.address="Kavre"
    }

 }
})

