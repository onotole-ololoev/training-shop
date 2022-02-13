import './App.css';
import Adv from './components/adv';
import Header from './components/header';
import Main from './components/main';
import Subscribe from './components/subscribe';

function App() {
  return (
    <div className="app">
       <Header />
       <Main />
       <Main />
       <Adv />
       <Subscribe />
    </div>
  );
}

export default App;
