// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AssociationPage from './Pages/AssociationPage';
import SignUpPage from './Pages/SignUpPage';  // Importa la página de registro

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/association/:id" element={<AssociationPage />} />
        <Route path="/signup" element={<SignUpPage />} />  {/* Nueva ruta para la página de Sign-up */}
      </Routes>
    </Router>
  );
};

export default App;
