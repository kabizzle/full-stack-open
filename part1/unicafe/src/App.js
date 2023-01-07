import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return (
    <>
    <td>{text}:</td>
    <td>{value}</td>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total === 0) {
    return (
      <>
      <h1>Statistics</h1>
      <p>No feedback given</p>
      <p>Click one of the buttons above!</p>
      </>
    )
  }

  const score = (good - bad) / total
  const positive = good / total

  return (
    <>
    <h1>Statistics</h1>
    <table>
      <tbody>
        <tr><StatisticLine text="Good" value={good} /></tr>
        <tr><StatisticLine text="Neutral" value={neutral} /></tr>
        <tr><StatisticLine text="Bad" value={bad} /></tr>
        <tr><StatisticLine text="All" value={total} /></tr>
        <tr><StatisticLine text="Score" value={score} /></tr>
        <tr><StatisticLine text="Positive" value={positive.toLocaleString("en", {style: "percent"})} /></tr>
      </tbody>    
    </table>

    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    console.log("good: ", good)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    console.log("bad: ", bad)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log("neutral: ", neutral)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App