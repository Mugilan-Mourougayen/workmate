// import {createSlice}from "@reduxjs/toolkit"

// const initialState ={
//     value:"hai",
// }
// export const tokenSlice = createSlice({
//     name:'token',
//     initialState,
//     reducers:{
//         addtoken:(state,action)=>{ state.value = action.payload},
//         removetoken:(state)=>{ state.value = null}
//     }

// })

// export const {addtoken,removetoken} = tokenSlice.actions

// export default tokenSlice.reducers


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    adddetails: (state,action) => {
      state.value = action.payload
    },
    removedetails:(state,action)=>{
      state.value = ""
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { adddetails ,removedetails} = detailsSlice.actions

export default detailsSlice.reducer