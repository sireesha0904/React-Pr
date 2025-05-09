import Comp from './component';
import Sample from './Example/Sample';
import Practice from './Practice';
import FirstCompo from './PropsContainer/FirstCompo';
import './App.css';
import SecondCompo from './PropsContainer/SecondCompo';
import ThirdCompo from './PropsContainer/ThirdCompo';
import FourthCompo from './PropsContainer/FourthCompo';
import StateMgm from './StateMgm';

const CarObject ={
  name: "BMW",
  model: "X5",
  year: 2020,
  color: "Black"
}
function App() {
  return (
    <div>
      <Comp />
      <Sample />
      <h1 className="heading">Hello This is Sample Css Styles</h1>
      <hr></hr>
      <Practice />
      <hr></hr> <hr></hr>
      <FirstCompo car={CarObject} />
      <SecondCompo name="SecondComponent" />
      <ThirdCompo name="ThirdComponent" />
      <FourthCompo name="FourthComponent" />
      <StateMgm />
    </div>
  );
}
export default App;