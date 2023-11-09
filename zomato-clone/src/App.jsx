import './App.scss'
import AccContainer from './components/AccContainer/AccContainer.jsx';
import Accordian from './components/Accordian/Accordian.jsx';
import CTA from './components/CTA/CTA.jsx';
import Card from './components/Card/Card.jsx';
import Cities from './components/Cities/Cities.jsx';
import Collection from './components/Collection/Collection.jsx';
import Footer from './components/Footer/Footer';

import Header from './components/Headers/Header.jsx';

function App() {

  return (
    <div className="App">
      <Header />
      <Card />
      <Collection />
      <Cities />
      <CTA />
      <AccContainer />
      <Footer />
    </div>
  );
}

export default App;
