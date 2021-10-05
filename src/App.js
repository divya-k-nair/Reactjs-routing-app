import logo from './logo.svg';
import './App.css';
import Postapi from './Components/Postapi';
import Header from './Components/Header';
import GetApi from './Components/GetApi';
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Header/>
    <Route path="/" exact component={Postapi}/>
    <Route path="/Viewcourse" exact component={GetApi}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
