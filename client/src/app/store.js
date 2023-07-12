// import {configureStore} from "@reduxjs/toolkit"
// // import tokenSlice from "../features/tokenSlice"
// import tokenSlice from "../features/tokenSlice"

// export const store = configureStore({
//     reducer:{token:tokenSlice}
// })



// this reducer store all the slice 


import { configureStore } from '@reduxjs/toolkit'
import detailsReducer from "../features/detailsSlice"

export const store = configureStore({
  reducer: {
    details: detailsReducer,
  },
})