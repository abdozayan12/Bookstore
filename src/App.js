import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BookPage from './pages/BookPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
