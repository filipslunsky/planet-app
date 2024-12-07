import { combineReducers, configureStore } from '@reduxjs/toolkit';
import plantesSlice from '../features/planets/state/slice';

const appReducer = combineReducers({
    planets: plantesSlice,
});

const store = configureStore({
    reducer: appReducer
});

export default store;
