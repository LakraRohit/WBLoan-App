import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import EMIcalculator from './components/EMIcalculator/EMIcalculator';
import Home from './components/homePage/HomePage';
import SignUpPage from './components/SignUpPage/SignUpPage'; // Uncomment if you need it

const App = () => {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/emi-calculator">EMI Calculator</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/emi-calculator" element={<EMIcalculator />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
