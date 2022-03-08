import React, { useEffect, useState } from 'react'
import axios from "axios";
import CountryList from "./components/CountryList.js"
import FilterForm from './components/FilterForm.js';

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const updateFilterEvent = (e) =>  {
    setFilter(e.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then((resp) =>  {
        const countryNames = resp.data.filter((r) => r.name)
        setCountries(countryNames)
      })
  }, [])

  return (
    <div className="App">
      <FilterForm prompt={'Find Countries'} onChange={updateFilterEvent} /> <br />
      <CountryList countryList={countries} countryFilter={filter} />
    </div>
  );
}

export default App;
