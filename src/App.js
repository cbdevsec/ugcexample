import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomeEn from './Components/HomeEn';
import HomeFr from './Components/HomeFr';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeEn />} />
        <Route path="/en" element={<HomeEn />} />
        <Route path="/fr" element={<HomeFr />} />
      </Routes>
    </Router>
  );
}

export default App;
