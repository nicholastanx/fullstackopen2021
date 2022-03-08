const Statistics = ({parts}) => {
  console.log(parts)

  const total = parts.reduce((last, curr) => last + curr.exercises, 0)

  return <p>Total of {total} exercises</p>
}

export default Statistics;