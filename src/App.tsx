import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@layout';
import { Contributing, Feedback } from '@meta';

const Home = lazy(() => import('@home'));
const Result = lazy(() => import('@result'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="acronym/:id" element={<Result />} />
        <Route path="contributing" element={<Contributing />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
    </Routes>
  );
}

export default App;
