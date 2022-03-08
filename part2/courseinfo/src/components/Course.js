import Header from "./Header.js"
import Content from "./Content.js"
import Statistics from "./Statistics.js"

const Course = ({course}) => {
  return <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Statistics parts={course.parts} />
  </div>
}

export default Course;