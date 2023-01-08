const Header = (course) => {
    console.log("header")
    console.log(course)
    return (
        <>
        <h2>{course.course.name}</h2>
        </>
    )
}
  
const Part = ({name, exercises}) => {
    console.log("part")
    return (
        <>
        <p> {name} {exercises} </p>
        </>
    )
}
  
const Content = (course) => {
    console.log("content")
    console.log(course)
    return (
        course.parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} /> 
    )
    )
}
  
const Total = (course) => {
    console.log("total")
    console.log(course)
    const total = course.parts.reduce(
        (initialValue, currentValue) => initialValue + currentValue.exercises,0)
    console.log("total:", total)
    return (
        <>
        <p>Number of exercises {total}</p>
        </>
    )
}
  
const Course = (props) => {
    console.log("Course props:", props)
    props.course.map(courses => console.log("num", courses))
    return (
        props.course.map((courses) => 
        <div>
            <Header course={courses}/>
            <Content parts={courses.parts}/>
            <Total parts={courses.parts}/>
        </div>

        )
    )
} 

export default Course