import { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api'

function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setfetchedCountries] = useState([])
  
  useEffect( () => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchCountries())
    }

    fetchAPI()
  }, [setfetchedCountries])
  
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue='' onChange={(e) => {handleCountryChange(e.target.value)}}>
        <option value="">Global</option>
        {fetchedCountries.map((country, idx) => <option key={idx} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
