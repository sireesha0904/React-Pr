import Comp from './component';
import Sample from './Example/Sample';
import './sample.css';
function App() {
  return (
    <div>
      <Comp />
      <Sample />
      <h1 className="my-special-heading">This is my custom heading</h1>
    </div>
  );
}
export default App;