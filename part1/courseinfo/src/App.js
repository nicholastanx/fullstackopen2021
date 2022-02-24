const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Content = (props) => {
  return (
    <>
      {props.course.parts.map(p => <Part key={p.name} part={p} />)}
    </>
  )
}

const Total = (props) => {
  let total_exercises = 0
  props.course.parts.forEach(p => total_exercises += p.exercises)

  return (
    <p>Number of exercises {total_exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App;