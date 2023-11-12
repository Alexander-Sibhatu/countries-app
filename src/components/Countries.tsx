import React, { useEffect, useState} from 'react'
import Country from './Country';
import { CountriesT } from '../type/type';
import { Row } from 'antd'
import NavBar from '../features/NavBar';
import '../App.css'
import { Footer } from 'antd/es/layout/layout';


type CountriesProps = { 
  countries: CountriesT
};

const Countries = (props: CountriesProps) => {
  const { countries } = props;

  const [searchInput, setSearchInput] = useState('')
  const [sortBy, setSortBy] = useState('A');
  const [sortedCountries, setSortedCountries] = useState<CountriesT>([...countries]);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event?.target.value);
  }

  const filteredCountries =  countries.filter((country) => 
  country.name.common.toLowerCase().includes(searchInput.toLocaleLowerCase()));

  const handleDropDown = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event?.target.value)
  }

  
    useEffect(() => {
      let sortedCountries = [...countries];

      if(sortBy === 'B'){
        sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      } else if(sortBy === 'C'){
        sortedCountries.sort((a, b) => b.name.common.localeCompare(a.name.common));
      } else if(sortBy === 'D'){
        sortedCountries.sort((a, b) => a.population-b.population)
      } else if(sortBy === 'E'){
        sortedCountries.sort((a, b) => b.population-a.population)
      }

      setSortedCountries(sortedCountries);
    }, [sortBy, countries])
    


  return (
    <div className='countries'>
      <NavBar />
      <h1>Countries App</h1>
      <input 
            type='text' 
            placeholder='Search for a country'
            value={searchInput} 
            onChange={ handleSearchInput }>
        </input>
        <select name="sortBy" id="sort_By" onChange={handleDropDown} value={sortBy}>
          <option value='A'> Sort by </option>
          <option value='B'> Sort A-Z </option>
          <option value='C'> Sort Z-A </option>
          <option value='D'> Sort by Ascending Population </option>
          <option value='E'> Sort by Descending Population </option>
        </select>
      <Row gutter={[16, 16]} className='countries_row'>
        {!searchInput
          ? 
          sortedCountries.map((country) => (
            <Country country={country} key={country.name.common}/>
            ))
            :
              filteredCountries.map((country) => (
                <Country key={country.name.common} country={country} />
             ))
        }
      </Row>
      <Footer />
    </div>
    
  )
      }

export default Countries