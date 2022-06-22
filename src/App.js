import {Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Header from './Header';
import A from './a';


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/a" element={<A />}/>
        </Routes>
     
    </div>
  );
}

export default App;