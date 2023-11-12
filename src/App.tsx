import "./App.css";
import Countries from "./components/Countries";
import useFetch from './components/useFetch';

const App = () => {

  const url = "https://restcountries.com/v3.1/all";

  const {countries, loading, error } = useFetch(url);


  return (
  <div  className="App">
    {loading && <h1>Loading...</h1>}
    {error? <h1>{error}</h1>: <Countries countries={countries}/>}
  </div>
  );
};


export default App;
