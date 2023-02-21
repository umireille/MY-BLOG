import React from 'react'
import Home from './pages/home/Home';


import Login from "./pages/login/Login";
import Charts from './pages/charts/Charts';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './pages/signup/Signup';
import Single from './pages/single/Single';

import Dashboard from './components/Dashboard/Dashboard';
import  Write from './pages/write/Write';



import axios from 'axios';
import { useState, useEffect } from 'react';


const App = () => {
  const [blogs, setBlogs] = useState([]);
  //fetchBlogs
 const fetchBlogs = async () =>{
  const response = await axios.get("https://blogapi12.onrender.com/api/v1/getAllBlogs");
  const data = await response.data.blogs;
  console.log(data)
  return data;
  
 }
 useEffect(() =>{
  const getBlogs = async () =>{
    const blogsFromServer = await fetchBlogs();
    setBlogs(blogsFromServer);
  }
  getBlogs();
 }, [])
 console.log(blogs);
 




  return (
    <> 
    <Router>
    
    
    <Routes>
     <Route exact path='/' element={<Home blogs={blogs}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/:blogId' element={<Single blogs={blogs}/>}/>
      <Route path='/homee' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard blogs={blogs}/>}/>
      <Route path='/write' element={<Write/>}/>
      <Route path='/Charts' element={<Charts/>}/>
     
    </Routes>
   
    </Router>
    
    </>
   
    
    
  );
}

export default App
	
			