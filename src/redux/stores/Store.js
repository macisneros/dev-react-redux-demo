import { configureStore } from '@reduxjs/toolkit';
import rotationReducer from '../reducers/RotationReducer';

const store = configureStore({
    reducer: {
        rotation: rotationReducer,
    },
});

export default store;