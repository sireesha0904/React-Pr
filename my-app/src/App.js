import Comp from './component';
import Sample from './Example/Sample';
import Practice from './Practice';
import './App.css';

function App() {
  return (
    <div>
      <Comp />
      <Sample />
      <h1 className='heading'>Hello This is Sample Css Styles</h1>
      <hr></hr>
      <Practice />
    </div>
  );
}
export default App;