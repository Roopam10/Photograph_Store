import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Photo from './components/Photo';
import AllPhotos from './components/AllPhotos';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Profile from './components/Profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/addPhoto' element={<Photo/>}></Route>
          <Route path='/allPhotos' element={<AllPhotos/>}></Route>
          <Route path='/addFav' element={<Favourites/>}></Route>
          <Route path='/logout' element={<h1>LogOut</h1>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          </Route>
          
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
