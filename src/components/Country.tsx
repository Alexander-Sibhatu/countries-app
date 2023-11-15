import React, { useState } from 'react'
import { CountryT } from '../type/type'
import { Col, Divider } from 'antd';


type Props = {
    country: CountryT
}

const Country = (props: Props) => {
    
  const {name, flags, area, population, capital, region} = props.country;

  const [isAdded, setIsAdded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleAddClick = () => {

    setIsAdded(!isAdded)
  }

  const handleSelectedCountry = () => {
    setIsSelected(!isSelected);
  }
  return (
      <Col span={7} xs={24} md={8} xl={7} className='country' offset={1}>
        <img src={flags.png} alt={`${name.common} flag`}/>
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
          onClick={handleAddClick}  className='favourite'>
            {isAdded ? 'Remove' : 'Add'}
        </button>
        <Divider orientation="left"></Divider>
      </Col>
  )
}

export default Country