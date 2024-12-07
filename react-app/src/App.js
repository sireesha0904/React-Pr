function Greetings(props){
  return <h1>Hello {props.name}</h1>
}
function App() {
  return (
    <div>
      <Greetings name = "React"/>
    </div>
  );
}
export default App;