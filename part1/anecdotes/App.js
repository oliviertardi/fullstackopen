import { useState } from 'react'

const Anecdote = ({title,text,nVotes}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>{nVotes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes,setVotes] = useState(new Array(8).fill(0))
  const [selected, setSelected] = useState(0)
  const [best, setBest] = useState(0)

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * 8))
  }

  const handleVote = () => {
    const lVotes = [...votes]
    lVotes[selected] += 1;
    setVotes(lVotes)
    setBest(lVotes.reduce((maxi, val, i, l) => (val > l[maxi] ? i : maxi), 0))
    //console.log(lVotes)
  }

  return (
    <div>
      <Anecdote title='Anecdote du jour' text={anecdotes[selected]} nVotes={votes[selected]} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next quote</button>
      <Anecdote title='Anecdote du jour' text={anecdotes[best]} nVotes={votes[best]} />

    </div>
  )
}

export default App