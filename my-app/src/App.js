import Comp from './component';
import Sample from './Example/Sample';
import Practice from './Practice';
import FirstCompo from './PropsContainer/FirstCompo';
import './App.css';
import SecondCompo from './PropsContainer/SecondCompo';
import ThirdCompo from './PropsContainer/ThirdCompo';
import FourthCompo from './PropsContainer/FourthCompo';

function App() {
  return (
    <div>
      <Comp />
      <Sample />
      <h1 className='heading'>Hello This is Sample Css Styles</h1>
      <hr></hr>
      <Practice />
      <hr></hr> <hr></hr>
      <FirstCompo name="FirstComponent" />
      <SecondCompo  name="SecondComponent"/>
      <ThirdCompo name = "ThirdComponent"/>
      <FourthCompo name = "FourthComponent" />


    </div>
  );
}
export default App;