import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCount } = countSlice.actions

export default countSlice.reducer