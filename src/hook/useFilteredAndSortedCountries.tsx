import { useEffect, useState } from 'react'
import { CountriesT } from '../type/type'

type CountriesProps = { 
    countries: CountriesT
    searchInput: string;
    sortBy: string;
  };


const useFilteredAndSortedCountries = ({countries, searchInput, sortBy}: CountriesProps) => {

    const [ filteredAndSortedCountries, setFilteredAndSortedCountries] = useState<CountriesT>([])

    useEffect(() => {
        let filteredCountries = [...countries];

        if(searchInput) {
            filteredCountries = filteredCountries.filter((country) => 
                country.name.common.toLowerCase().includes(searchInput.toLocaleLowerCase())
            )
        };


        const sortFunctionMap: Record<string, (a: any, b: any) => number> = {
            B: (a, b) => a.name.common.localeCompare(b.name.common),
            C: (a, b) => b.name.common.localeCompare(a.name.common),
            D: (a, b) => a.population - b.population,
            E: (a, b) => b.population - a.population,
          };
      console.log(sortBy)
          const sortFunction = sortFunctionMap[sortBy];
          
          if (sortFunction) {
            filteredCountries.sort(sortFunction);
          }

        setFilteredAndSortedCountries(filteredCountries)
    }, [countries, searchInput, sortBy])

  return filteredAndSortedCountries;
}

export default useFilteredAndSortedCountries