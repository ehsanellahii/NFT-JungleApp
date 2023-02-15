import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home'
import Ox from './Pages/Ox'
import Roadmap from './Pages/Roadmap'
import Gallery from './Pages/Gallery'
import Team from './Pages/Team'
import Pedigree from './Pages/Pedigree'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/buyox' element={<Ox/>}/> 
    <Route path='/roadmap' element={<Roadmap />} />
    <Route path='/gallery' element={<Gallery/>} />
    <Route path='/team' element={<Team />}/>
    <Route path='/pedigree' element={<Pedigree />}/>
    </Routes>
    </div>
  );
}

export default App;
