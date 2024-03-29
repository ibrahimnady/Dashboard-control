import {Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { productInputs, userInputs } from './formSource';
import "./style/dark.scss"
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';



function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app "}>
        <Routes> 
          <Route path="home" element={<Home/>}/>
          <Route path='*' element={<Home/>}/>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New input={userInputs} title="Add New User"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New input={productInputs} title="Add New Product"/>}/>
            </Route>
          </Route>

        </Routes>
    </div>
  );
}

export default App;
