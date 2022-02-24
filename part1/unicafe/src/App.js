import { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>
    {text}
  </button>
}

const StatisticTableRow = ({value, text}) => {
  return <tr><td>{text}</td><td>{value}</td></tr>
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total == 0) {
    return (
      <p>No feedback received yet</p>
    )
  }

  const average = (good + bad * -1) / total
  const positive = good / total * 100

  return (
    <table>
      <tbody>
        <tr>
          <th>Statistic</th>
          <th>Value</th>
        </tr>
        <StatisticTableRow value={good} text={'Good'} />
        <StatisticTableRow value={neutral} text={'Neutral'} />
        <StatisticTableRow value={bad} text={'Bad'} />
        <StatisticTableRow value={total} text={'Total'} />
        <StatisticTableRow value={average.toPrecision(2)} text={'Average'} />
        <StatisticTableRow value={positive.toPrecision(2)+'%'} text={'Positive'} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {setGood(good+1)}
  const incrementNeutral = () => {setNeutral(neutral+1)}
  const incrementBad = () => {setBad(bad+1)}

  return (
    <div>
      <h1>How was your experience?</h1>
      <Button onClick={incrementGood} text="Good" />
      <Button onClick={incrementNeutral} text="Neutral" />
      <Button onClick={incrementBad} text="Bad" />

      <h1>Here's what other people thought</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App