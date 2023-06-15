const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header c={course.name} />
      <Content p={course.parts} />
      <Total p={course.parts} />
    </div>
  )
}

const Header = ({c}) => <h1>{c}</h1>

const Content = ({p}) => (
  <>
    <Part p={p[0].name} e={p[0].exercises} />
    <Part p={p[1].name} e={p[1].exercises} />
    <Part p={p[2].name} e={p[2].exercises} />
  </>
)

const Part = ({p,e}) => (
  <p>{p} {e}</p>
)

const Total = ({p}) => (
  <p>Number of exercises {p[0].exercises + p[1].exercises + p[2].exercises}</p>
)

export default App