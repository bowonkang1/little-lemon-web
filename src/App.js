import React from 'react';
import Header from './Header'; // Make sure this is a default import
import Nav from './Nav'; // Make sure this is a default import
import Main from './Main'; // Make sure this is a default import
import Footer from './Footer'; // Make sure this is a default import

function App() {
  console.log("App is rendering");
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;





