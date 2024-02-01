// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Category from './pages/Category';
import Item from './pages/Item';
import Restaurant from './pages/Restaurant';
import Offers from './pages/Offer';
import Login from './Components/login';
// import Login from './Components/Login';

const App = () => {
  return (
    <Login/>
    // <Router>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <>
    //           <SideBar>
    //           <Routes>
    //             <Route path="/category" element={<Category />} />
    //             <Route path="/item" element={<Item />} />
    //             <Route path="/restaurant" element={<Restaurant />} />
    //             <Route path="/offers" element={<Offers />} />
    //           </Routes>
    //           </SideBar>
    //         </>
    //       }
    //     />
    //   </Routes>
    // </Router>
  );
};

export default App;
