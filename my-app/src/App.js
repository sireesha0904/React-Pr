import Comp from './component';
import Sample from './Example/Sample';
import Practice from './Practice';
import './App.css';
import SecondCompo from './PropsContainer/SecondCompo';
import ThirdCompo from './PropsContainer/ThirdCompo';
import FourthCompo from './PropsContainer/FourthCompo';
import StateMgm from './StateMgm';
import UseEff from './UseEff';

function App() {
  return (
    <div>
      <Comp />
      <Sample />
      <h1 className="heading">Hello This is Sample Css Styles</h1>
      <hr></hr>
      <Practice />
      <hr></hr> <hr></hr>
      
      <SecondCompo name="SecondComponent" />
      <ThirdCompo name="ThirdComponent" />
      <FourthCompo name="FourthComponent" />
      <hr></hr>
      <StateMgm />
      <hr></hr>
      <UseEff />
      <hr></hr>
    </div>
  );
}
export default App;