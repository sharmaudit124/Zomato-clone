import './App.css'
import Card from './components/Card/Card.jsx';
import Collection from './components/Collection/Collection.jsx';
import Footer from './components/Footer/Footer';

import Header from './components/Headers/Header.jsx';

function App() {

  return (
    <div className="App">
      <Header />
      <Card />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
