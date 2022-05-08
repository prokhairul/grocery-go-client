import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import Home from './Pages/Home/Home/Home'
import Inventory from './Pages/Inventory/Inventory';
import About from './Pages/About/About'
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register'
import Blogs from './Pages/Blogs/Blogs'
import NotFound from './Pages/Shared/NotFound/NotFound'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import MyItem from './Pages/MyItem/MyItem'


function App() {

  return (
    <div className='App'>

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path='/add' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }> </Route>

        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>



      </Routes>


      <Footer></Footer>

    </div>
  );
}

export default App;
