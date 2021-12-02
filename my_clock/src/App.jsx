
import './App.css';
import { DigitalClock,Countdown,Stopwatch } from './components';

function App() {
  return (
    <div className="App">
        <h1 className="app_title">呪術廻戦</h1>
        <Countdown></Countdown>
        <DigitalClock></DigitalClock>
       {/*  <Stopwatch></Stopwatch> */}
    </div>
  );
}

export default App;
