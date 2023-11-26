import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import UploadPage from './components/UploadPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/upload" element={<UploadPage />} />


        {/* Add other routes here */}
      </Routes>

    </Router>
  );
};

export default App;