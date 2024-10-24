import React, { useEffect, useState } from 'react'
import { CountryT } from '../type/type'
import { Col, Divider } from 'antd';
import { addFavourite, removeFavourite } from '../redux/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';


type Props = {
    country: CountryT
}

const Country = (props: Props) => {

  const { country } = props; 
  const {name, flags, area, population, capital, region} = country;


  const [isSelected, setIsSelected] = useState(false);
  const [isAddedLocal, setIsAddedLocal] = useState(false)



  const dispatch = useAppDispatch();

  const favouriteCountries = useAppSelector(
    (state: RootState) => state.favourites.favouriteCountries)

  useEffect(() => {
    // Update isAdded whenever favouriteCountries changes
    const found = favouriteCountries?.some(
      (c: CountryT) => c.name.common === name.common
    );
    setIsAddedLocal(found);
  }, [favouriteCountries, name.common]);

  const handleAddClick = (country: CountryT) => {
      if (isAddedLocal) {
        dispatch(removeFavourite(country));
        console.log('Removed from favourites:', country.name.common);
      } else {
        dispatch(addFavourite(country));
        console.log('Added to favourites:', country.name.common);
      }
      setIsAddedLocal(!isAddedLocal);
    };


  const handleSelectedCountry = () => {
    setIsSelected(!isSelected);
  }
  return (
      <Col span={7} xs={24} sm={12} md={6} lg={4} className='country' offset={1}>
       <div className='country-content'>
       <img className='country-flag' src={flags.png} alt={`${name.common} flag`}/>
        <div className='country-content'>
          <button className='country__name' onClick={handleSelectedCountry}>{name.common}</button>
          {isSelected && (
            <div className='country__details'>
              <p>Area: {area.toLocaleString()}km</p>
              <p>Capital: {capital}</p>
              <p>Population: {population.toLocaleString()}</p>
              <p>Region: {region}</p>
            </div>
          )}
          <button  
            onClick={() => handleAddClick(country)}  className='favourite'>
              {isAddedLocal ? 'Remove' : 'Add'}
          </button>
        </div>
        <Divider orientation="left"></Divider>
       </div>
      </Col>
  )
}

export default Country