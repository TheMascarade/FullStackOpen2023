const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} excercises={props.parts[0].excercises} />
      <Part name={props.parts[1].name} excercises={props.parts[1].excercises} />
      <Part name={props.parts[2].name} excercises={props.parts[2].excercises} />

    </div>
  )

}

const Part = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Number of excercises: {props.excercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total excercises: {props.e1 + props.e2 + props.e3}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
    {
      name: "Fundamentals of React",
      excercises: 10
    },
    {
      name: "Using props to pass data",
      excercises: 7
    },
    {
      name: "State of a component",
      excercises: 14
    }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total e1={course.parts[0].excercises} e2={course.parts[1].excercises} e3={course.parts[2].excercises} />
    </div>
 )
}

export default App