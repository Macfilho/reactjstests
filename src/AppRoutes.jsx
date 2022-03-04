import React, { Component }  from 'react';
import { BrowserRouter as Router,
    Route,
    Routes,
    Navigate,   
} from "react-router-dom";


import Form from './components/Form';
import LoginPage from './components/LoginPage';
const AppRoutes = () => {
  return(
      <Router>
          <Routes>
            <Route exact path="/login" element={<LoginPage/>} />
            <Route exact path="/" element={<Form/>} />
          </Routes>
      </Router>
  );

};
export default AppRoutes;