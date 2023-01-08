import { useState } from 'react'

const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Anecdote = ({ anecdotes, selected}) => {
  return (
    <div>
      <p>{anecdotes[selected]}</p>
    </div>
  )
}

const Votes = ({votes, selected}) => {
  return (
    <div>
      <p>This anecdote has {votes[selected]} votes.</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const len = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(len).fill(0))
  const [highestVote, setHighestVote] = useState(0)

  const handleNextClick = () => {
    const randInRange = (max) => {
      return Math.floor(Math.random() * max)
    }
    setSelected(prev => randInRange(anecdotes.length - 1))
    console.log("selected number: ", selected)
    console.log("Selected anecdote: ", anecdotes[selected])
  } 

  const handleVoteClick = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
    console.log("current votes: ", votesCopy[selected])

    let max = votesCopy[0]
    let maxIndex = 0

    for (let i = 1; i< votesCopy.length; i++) {
      if (votesCopy[i] > max) {
        maxIndex = i
        max = votesCopy[i]
      }
    }
    setHighestVote(maxIndex)
  }

  console.log("votes:", votes)
  console.log("highest voted: ", anecdotes[highestVote])

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Anecdote anecdotes={anecdotes} selected={selected} />
      <Votes votes={votes} selected={selected}/>
      <Button handleClick={handleVoteClick} text="Vote"/>
      <Button handleClick={handleNextClick} text="Next anecdote"/>
      <Header text="Most voted anecdote"/>
      <Anecdote anecdotes={anecdotes} selected={highestVote} />
      <Votes votes={votes} selected={highestVote}/>
    </div>
  )
}

export default App
