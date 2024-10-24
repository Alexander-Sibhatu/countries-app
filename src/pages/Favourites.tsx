import { useSelector } from 'react-redux'
import { CountryT, CountriesT } from '../type/type'
import { removeFavourite, selectFavouriteCountries }  from '../redux/counter/counterSlice'
import { ThemeProvider } from './../context/ThemeContext';
import Footer from '../features/Footer'
import NavBar from '../features/NavBar'
import { useDispatch } from 'react-redux';



const Favourites = () => {
  // const favouriteCountries: CountriesT = useSelector((state: RootState) => 
  //     state.favourites?.favouriteCountries || [])
  const favouriteCountries: CountriesT = useSelector(selectFavouriteCountries) || [];
  console.log(favouriteCountries)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log('Updated Favourite Countries:', favouriteCountries);
  // }, [favouriteCountries]);

  const handleRemoveClick = (country: CountryT) => {
    dispatch(removeFavourite(country));
  };

  return (
    <ThemeProvider >
      <div className='fav'>
        <NavBar />
        <h2 className='fav-heading'>Your Favourite Countries</h2>
          {favouriteCountries.length === 0 ?(
            <p>No favourite countries added yet.</p>
          ) : (
            <p>
              {favouriteCountries?.map((country: CountryT) => (
                <li key={country.name.common}>
                  {country.name.common}
                  <button onClick={() => handleRemoveClick(country)}>Remove</button>
                </li>
                
              ))}
            </p>
          )}
        <Footer />
      </div>
    </ThemeProvider>
    
  )
}

export default Favourites