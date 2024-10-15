import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        results: [],
    },
    reducers: {
        setSearchQuery(state, action) {
            state.query = action.payload;
            console.log(state.query);
        },
        setSearchResults(state, action) {
            state.results = action.payload;
        },
    },
})

export const { setSearchQuery, setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;