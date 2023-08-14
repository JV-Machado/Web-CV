import './App.css';
import {Header} from './components/header'
import {About} from './components/about'
import {Skills} from './components/skills'
import {Portfolio} from './components/portfolio'
import {Contacts} from './components/contacts'

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
    </div>
  );
}

export default App;
