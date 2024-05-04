import { configureStore } from '@reduxjs/toolkit'
import wallerReducer from '../redux/walletSlice'

const rootReducer = {
    wallet: wallerReducer,
}

export const store = configureStore({
    reducer: rootReducer,
});
   
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch