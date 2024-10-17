import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ProfileCard from './Components/ProfileCard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Content from './Components/Content';
import Intro from './Components/Intro';

function App() {
  return (
    <div id='main'>
      
      <BrowserRouter>
          <Header/>
          <div className='content'>
          <Intro></Intro>
          </div>
          <ProfileCard/> 
          <Content/>
          {/* <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
