import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({anecdotes, anecvotes}) => {
  let highestVotes = 0
  let idxOfMost = 0

  for (let i = 0; i < anecvotes.length; ++i) {
    if (anecvotes[i] > highestVotes) {
      idxOfMost = i
      highestVotes = anecvotes[i]
    }
  }

  return <p>{anecdotes[idxOfMost]} <br />has {highestVotes} votes</p>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const anecvotes = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecvotes)

  const randomize = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const incrementVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] = votes[selected] + 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <Button onClick={incrementVotes} text={'Vote for this one!'} />
      <Button onClick={randomize} text={'Randomize'} />

      <h1>Anecdote with most votes</h1>
      <Statistics anecdotes={anecdotes} anecvotes={votes} />
    </div>
  )
}

export default App