
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Birthday from './sections/Birthday';
import IpsitaBirthday from './sections/IpsitaBirthday';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Birthday targetDate="2024-10-30" />} />
        <Route path="/Ipsita-birthday" element={<IpsitaBirthday />} />
      
      </Routes>
    </Router>
  );
}

export default App;
