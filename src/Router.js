import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Second from './pages/second/Second';
// import your route components too

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}
