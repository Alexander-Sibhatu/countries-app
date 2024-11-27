import Footer from "../features/Footer";
import "../App.css";
import Countries from "../components/Countries";
import useFetch from '../components/useFetch';
import { ThemeProvider } from "../context/ThemeContext";
import NavBar from "../features/NavBar";


const Home = () => {

  const url = "https://restcountries.com/v3.1/all";

  const {countries, loading, error } = useFetch(url);


 
  return (
    <div className="home">
      <ThemeProvider>
        <div >
          <NavBar />
            <div>
              {loading && <h1>Loading...</h1>}
              {error? <h1>{error}</h1>: <Countries countries={countries}/>}
            </div>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
    
  );
};


export default Home;
  
  