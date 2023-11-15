import "./App.css";
import Countries from "./components/Countries";
import useFetch from './components/useFetch';
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {

  const url = "https://restcountries.com/v3.1/all";

  const {countries, loading, error } = useFetch(url);


  return (
    <ThemeProvider>
      <div  className="App">
        {loading && <h1>Loading...</h1>}
        {error? <h1>{error}</h1>: <Countries countries={countries}/>}
      </div>
    </ThemeProvider>
  );
};


export default App;
