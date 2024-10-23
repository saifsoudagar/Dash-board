import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Reports from './components/Reports';
import Analytics from './components/Analytics'; 

const App = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Router>
        <Sidebar />
        <div className="flex-1 p-6 bg-[#201D47]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
