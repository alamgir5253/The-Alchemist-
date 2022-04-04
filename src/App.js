
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Reviews from './Components/Reviews/Reviews'
import DashBoard from './Components/DashBoard/DashBoard'
import About from './Components/About/About'
import NotFound from './Components/NotFound/NotFound'
import Blogs from './Components/Blogs/Blogs';
function App() {
  return (
    <div className="App bg-yellow-50">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dash-board' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
