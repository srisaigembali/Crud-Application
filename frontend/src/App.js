// components
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import CrudApp from './components/CrudApp';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CrudApp />}></Route>
        <Route path="/all" element={<AllUsers />}></Route>
        <Route path="/add" element={<AddUser />}></Route>
        <Route path="/edit/:id" element={<EditUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
