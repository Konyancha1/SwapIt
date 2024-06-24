import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/home';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
