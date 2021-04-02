import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchTrending}/>
      <Row title = "TRENDING" fetchUrl={requests.fetchTrending}/>
       
    </div>
  );
}

export default App;
