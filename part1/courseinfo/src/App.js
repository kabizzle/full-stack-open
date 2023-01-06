const Header = (header) => {
  return (
    <>
    <h1>{header.course}</h1>
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <>
      <p> {name} {exercises} </p>
    </>
  )
}

const Content = (content) => {
  return (
    <>
      <Part name={content.part1} exercises={content.exercises1}/>
      <Part name={content.part2} exercises={content.exercises2}/>
      <Part name={content.part3} exercises={content.exercises3}/>
    </>
  )
}

const Total = ({exercises1, exercises2, exercises3}) => {
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App;
