import React from 'react';
import CardsContainer from './components/CardsContainer';
import Footer from './components/Footer';
import Header from './components/Header';
// import Header from './components/Header';
// import Main from './components/Main';

function App() {
  return (
    <div className="uk-background-muted ">
      <Header />
      <hr></hr>
      <CardsContainer />
      <hr></hr>
      <Footer />
      
    </div>
  
  
  );
}

export default App;
