import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbars';
import HomeHead from './components/HomeHead';
import Footer from './components/Footer';
import DetailPerson from './components/DetailPerson';
import ChiangMai from './components/ChiangMai';
import Nan from './components/Nan';

function App() {
  return (
    <div className="App">
      < Navbars/>
     <hr/>
      <HomeHead/>

      <DetailPerson/>

      <ChiangMai/>
      <hr/>
      <Nan/>
    
      <Footer/>
    </div>
  );
}

export default App;
