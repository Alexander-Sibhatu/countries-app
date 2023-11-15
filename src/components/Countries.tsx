import React, { useState} from 'react'
import Country from './Country';
import { CountriesT } from '../type/type';
import { Row } from 'antd'
import NavBar from '../features/NavBar';
import '../App.css'
import  Footer  from '../features/Footer';
import useFilteredAndSortedCountries from '../hook/useFilteredAndSortedCountries';
import Paginate from './pagination';


type CountriesProps = { 
  countries: CountriesT
};

const Countries = (props: CountriesProps) => {
  const { countries } = props;

  const [searchInput, setSearchInput] = useState('')
  const [sortBy, setSortBy] = useState('A');
  //For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(6);

  //Get Current Countries
  const IndexOfLastCountry = currentPage * countriesPerPage;
  const IndexOfFirstCountry = IndexOfLastCountry - countriesPerPage;

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event?.target.value);
  }


  const handleDropDown = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event?.target.value)
  }

  const paginate = (currentPage: number) => setCurrentPage(currentPage);


  const filteredAndSortedCountries = useFilteredAndSortedCountries({countries, searchInput, sortBy});
  const sortedAndPaginatedCountries = filteredAndSortedCountries.slice(
    IndexOfFirstCountry,
    IndexOfLastCountry
  )

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
          sortedAndPaginatedCountries.map((country) => (
            <Country country={country} key={country.name.common}/>
            ))
            :
              filteredAndSortedCountries.map((country) => (
                <Country key={country.name.common} country={country} />
             ))
        }
      </Row>
      <Paginate 
        countriesPerPage={countriesPerPage} 
        totalCountries={countries.length}
        currentPage={currentPage} 
        paginate={paginate}
      />
      <Footer />
    </div>
    
  )
      }

export default Countries