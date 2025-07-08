// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import GalleryPage from './GalleryPage'; // assume this is your gallery page component

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* Add more routes as needed */}

      </Routes>
    </Router>
  );
}

export default App;
