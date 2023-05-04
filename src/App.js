import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Startpage } from 'components/Startpage';
import { All } from 'components/All';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/music" element={<All />} />
      </Routes>
    </BrowserRouter>
  );
}