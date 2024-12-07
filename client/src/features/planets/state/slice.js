import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const PLANETS_URL = `${import.meta.env.VITE_API_URL}/planets`;

const initialState = {
    planets: [],
    status: 'idle',
    error: null
};

const getPlanets = createAsyncThunk('planets/getPlanets', async () => {
    try {
        const res = await fetch(PLANETS_URL);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
});

const planetsSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getPlanets.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getPlanets.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(getPlanets.fulfilled, (state, action) => {
            state.status = 'success';
            state.planets = action.payload;
          })
    }
});

export const { actions: planetsActions } = planetsSlice;
export { getPlanets };
export default planetsSlice.reducer;
