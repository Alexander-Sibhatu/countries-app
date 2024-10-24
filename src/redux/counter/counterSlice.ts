import { PayloadAction, createSlice, createSelector } from "@reduxjs/toolkit";
import { CountryT } from "../../type/type";
import { RootState } from "../../app/store";


interface FilterState  {
    favouriteCountries: CountryT[];
}

const initialState: FilterState = {
    favouriteCountries: []
}


const filterSlice = createSlice({
  name: 'favourites',
  initialState,
    reducers: {
      addFavourite: (state, action: PayloadAction<CountryT>) => {
        const newFavourite = action.payload
        const alreadyExists = state.favouriteCountries.some(
          (country) => country.name.common === newFavourite.name.common
        );
        if (!alreadyExists) {
          state.favouriteCountries.push(newFavourite)
          // console.log('Added to state:', [...state.favourites.favouriteCountries]);
          // console.log(state.favourites.favouriteCountries[0].name.common)
        }
         
      },
      removeFavourite: (state, action) => {
        const countryToRemove = action.payload
        state.favouriteCountries = state.favouriteCountries.filter(
          (country) => country.name.common !== countryToRemove.name.common)
          console.log('Removed from state:', [...state.favouriteCountries]);
      },
  }
})

export const { addFavourite, removeFavourite } = filterSlice.actions;

 // Memoized selector using `createselector`
 export const selectFavouriteCountries = createSelector(
  (state: RootState) => state.favourites.favouriteCountries,
  (favouriteCountries) => favouriteCountries || []
 )

export default filterSlice.reducer;
