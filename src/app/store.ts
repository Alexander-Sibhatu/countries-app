import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from '../redux/counter/counterSlice'


 const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


export default store