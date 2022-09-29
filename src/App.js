
import './App.css';
import Data from './components/Data/Data';
import Header from './components/Header/Header';
import Question from './components/Question/Question';

function App() {
  return (
    <div >
      <Header></Header>
      <Data></Data>
      <div className="App">
        <Question></Question>
      </div>
    </div>
  );
}

export default App;
