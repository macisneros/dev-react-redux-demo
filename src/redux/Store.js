import { configureStore } from '@reduxjs/toolkit';
import rotationReducer from './RotationReducer';

const store = configureStore({
    reducer: {
        rotation: rotationReducer,
    },
});

export default store;