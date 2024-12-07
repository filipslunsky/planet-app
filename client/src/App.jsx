import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './features/Navbar';
import Mercury from './features/planets/Mercury';
import Venus from './features/planets/Venus';
import Earth from './features/planets/Earth';
import Mars from './features/planets/Mars';
import Jupiter from './features/planets/Jupiter';
import Saturn from './features/planets/Saturn';
import Uranus from './features/planets/Uranus';
import Neptune from './features/planets/Neptune';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Earth />} />
          <Route path='/mercury' element={<Mercury />} />
          <Route path='/venus' element={<Venus />} />
          <Route path='/earth' element={<Earth />} />
          <Route path='/mars' element={<Mars />} />
          <Route path='/jupiter' element={<Jupiter />} />
          <Route path='/saturn' element={<Saturn />} />
          <Route path='/uranus' element={<Uranus />} />
          <Route path='/neptune' element={<Neptune />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App;
