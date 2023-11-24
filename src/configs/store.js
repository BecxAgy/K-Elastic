import { configureStore } from '@reduxjs/toolkit'
import documentReducer from '../slices/documentSlice'

export default configureStore({
    reducer: {
        document: documentReducer,
    },
})
