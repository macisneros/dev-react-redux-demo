import { createSlice } from '@reduxjs/toolkit';

const rotationSlice = createSlice({
    name: 'rotation',
    initialState: {
        value: 1,
    },
    reducers: {
        incrementRotation: (state) => {
            if (state.value > 1) {
                state.value -= 1;
            }
        },
        reduceRotation: (state) => {
            if (state.value < 6) {
                state.value += 1;
            }
        },
    },
});

export const { incrementRotation, reduceRotation } = rotationSlice.actions;
export default rotationSlice.reducer;
