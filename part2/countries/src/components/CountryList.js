import Country from './Country.js'

const CountryList = ({countryList, countryFilter}) => {
  if (countryFilter === '') {
    return <>Please specify a filter</>
  }

  countryFilter = countryFilter.toLowerCase()
  const filteredCountries = countryList.filter((c) => c.name.toLowerCase().startsWith(countryFilter))

  if (filteredCountries.length > 10) {
    return <>Too many matches, please specify another filter</>
  }

  if (filteredCountries.length === 0) {
    return <>No matches found, please specify another filter</>
  }

  if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />
  }

  return <>{filteredCountries.map((c) => <p key={c.name}>{c.name}</p>)}</>
}

export default CountryList;