import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />

    </div>
  )
}
Layout();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path={`${process.env.PUBLIC_URL}/`} element={<MainPage />} /> */}
          <Route path='/' element={<MainPage />} />
          <Route path=':movieID' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
