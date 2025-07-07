import { Link } from 'react-router-dom';
import logo from './img/newlogo.png';
import './App.css';

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <Link
        className="App-link"
        to="/home"
      >
        더 디앤씨 클론 프로젝트
      </Link>
    </div>
  );
}

export default Main;
