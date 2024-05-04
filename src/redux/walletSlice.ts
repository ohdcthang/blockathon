import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: '',
    address: '',
    balance: '0',
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
      setWallet: (state, action) => {
        state.address = action.payload.address
        state.email = action.payload.email
        state.balance = action.payload.balance
      },
    },
})

export const { setWallet } = walletSlice.actions

export default walletSlice.reducer
  