import './App.css';
import { callBackend } from './datapull/helpers'

function App() {
  const message = callBackend()
  console.log(message)
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, my name is Crassus! </p>
      </header>
    </div>
  );
}

export default App;
