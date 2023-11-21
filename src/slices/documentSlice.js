import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import documentService from '../services/documentService'

const initialState = {
    documents: [],
    document: {},
    error: false,
    success: false,
    loading: false,
}

//slice de pesquisa
export const searchDocumentsBySynonyms = createAsyncThunk(
    'document/searchsynonym',
    async (inputValue, thunkApi) => {
        const data = await documentService.searchSynonyms(inputValue)

        return data
    },
)

export const documentSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {
        resetMessage: state => {
            state.message = null
        },
    },
    extraReducers: builder => {
        builder
            .addCase(searchDocumentsBySynonyms.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(searchDocumentsBySynonyms.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.interventions = action.payload
            })
    },
})

export const { resetMessage } = documentSlice.actions
export default documentSlice.reducer
