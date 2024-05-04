import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: '',
    address: ''
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
      setWallet: (state, action) => {
        state.address = action.payload.address
        state.email = action.payload.email
      },
    },
})

export const { setWallet } = walletSlice.actions

export default walletSlice.reducer
  