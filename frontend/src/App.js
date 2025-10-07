//the main layout of the app is here
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 🛣️ routing
import Login from "./components/Login"; // 👈 login button
import Callback from "./components/Callback"; // 👈 the callback page

function App() {
  return (
    <Router>
      <div>
        <h1>Spotify Monthly Wrapped</h1>
        <Routes>
          {/* Main login page */}
          <Route path="/" element={<Login />} />
          
          {/* Spotify redirects here after login */}
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
