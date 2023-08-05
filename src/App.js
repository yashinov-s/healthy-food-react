import './App.css';
import  Header  from './Components/header/header';
import Intro from './Components/intro/intro';
import Main from './Components/main/main';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
