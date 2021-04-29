import React from 'react';
import CardsContainer from './components/CardsContainer';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <CardsContainer />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
