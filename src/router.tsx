import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
