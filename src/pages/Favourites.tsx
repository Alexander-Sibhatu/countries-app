import { useSelector } from 'react-redux'
import { CountryT, CountriesT } from '../type/type'
import { selectFavouriteCountries }  from '../redux/counter/counterSlice'
import { ThemeProvider } from './../context/ThemeContext';
import Footer from '../features/Footer'
import NavBar from '../features/NavBar'
import Country from '../components/Country';



const Favourites = () => {
  const favouriteCountries: CountriesT = useSelector(selectFavouriteCountries) || [];
  console.log(favouriteCountries)


  return (
    <ThemeProvider >
      <div className='fav'>
        <NavBar />
        <h2 className='fav-heading'>Your Favourite Countries</h2>
          {favouriteCountries.length === 0 ?(
            <p>No favourite countries added yet.</p>
          ) : (
            <div className='fav-countries'>
              {favouriteCountries?.map((country: CountryT) => (
                <Country key={country.name.common} country={country} />
              ))}
            </div>
          )}
        <Footer />
      </div>
    </ThemeProvider>
    
  )
}

export default Favourites