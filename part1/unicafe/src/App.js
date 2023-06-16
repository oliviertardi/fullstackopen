import { useState } from 'react'

// a proper place to define a component
const Statistics = ({g,n,b}) => {
  if (g+n+b === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine t="good" v={g} />
            <StatisticLine t="neutral" v={n} />
            <StatisticLine t="bad" v={b} />
            <StatisticLine t="all" v={g+n+b} />
            <StatisticLine t="average" v={(g - b) / (g + n + b)} />
            <StatisticLine t="positive" v={g / (g + n + b)} />
          </tbody>        
        </table>
      </div>
    )
  }
}

const StatisticLine = ({ t, v }) => {
  return (
    <tr>
      <td>{t}</td>
      <td>{v}</td>
    </tr> 
  )
}

const Bouton = ({handler,text}) => {
  return <button onClick={handler}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Bouton handler={() => setGood(good+1)} text="good" />
      <Bouton handler={() => setNeutral(neutral +1)} text="neutral" />
      <Bouton handler={() => setBad(bad +1)} text="bad" />
      
      <Statistics g={good} n={neutral} b={bad} />
    </>
  )
}

export default App