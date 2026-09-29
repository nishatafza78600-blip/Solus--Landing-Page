

import Navbar from "./components/navbar";
 import Hero from "./components/hero";
import cartoonImg from './components/hero'
import Work from './components/work';
import Service from './components/path';
import Card from './components/card';
import Community from "./components/community";
import Message from "./components/message";
import Footer from "./components/footer";


function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px',backgroundColor:'#f7f7f2' }}>
      <Navbar/>
       <cartoonImg/>
      <Hero/>
      <Work/>
      <Service/>
      <Card/>
      <Community/>
      <Message/>
      <Footer/>
    </div>
  );
}

export default App;