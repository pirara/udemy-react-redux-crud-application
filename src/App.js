// function App() {
//   return <div><h1>Hello world</h1></div>
// }
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}
export default App;
