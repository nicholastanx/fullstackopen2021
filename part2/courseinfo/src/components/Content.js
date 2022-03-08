import Part from "./Part.js"

const Content = ({parts}) => {
  return <>
    {parts.map((p) => 
      <Part key={p.id} part={p} />
    )}
  </>
}

export default Content;