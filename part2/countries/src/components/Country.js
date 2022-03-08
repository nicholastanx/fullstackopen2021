import Weather from './Weather.js'

const Country = ({country}) => {
  return <>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>

      <h2>Languages:</h2>
      <ul>
        {country.languages.map((e) => <li key={e.name}>{e.name}</li>)}
      </ul>

      <img src={country.flags.png} alt={'Flag image'} />

      <h2>Weather in {country.capital}</h2>
      <Weather country={country} />
    </>
}

export default Country;