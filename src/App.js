import './App.css';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import About from './components/About';
import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = useCallback((message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  }, []);

  const toggleMode = useCallback(() => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.add('dark-mode');
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.classList.remove('dark-mode');
      showAlert("Light mode enabled", "success");
    }
  }, [mode, showAlert]);

  return (
    <Router>
      <NavBar title="TextWiz" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className={`container my-3 ${mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <Routes>
          {/* Set default route to render TextForm component */}
          <Route path="/TextWiz" element={<TextForm showAlert={showAlert} heading="Try TextWiz - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />} />
          <Route path="/TextWiz/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
