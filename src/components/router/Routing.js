import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Login from '../login'
import { LoginContainer } from '../LoginContainer'
import App from '../ExistingUser';
import Dashboard from '../Dashboard'
import PrivateRouter from "./PrivateRouter";
import ProductPage from '../ProductPage'
import ProductDetailPage from '../ProductDetail'
const Routing = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/RegisteredUser' element={<LoginContainer/>}></Route>
        <Route path='/ExistingUser' element={<App></App>}></Route>
        <Route path='/ExistingUser' element={<Login/>}/>

        <Route path='/dashboard' element={<PrivateRouter/>}></Route>
        
        <Route path='/products' element={<ProductPage></ProductPage>}></Route>
        <Route path='/products/:id' element={<ProductDetailPage></ProductDetailPage>}></Route>
    </Routes>
  )
}

export default Routing