import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Posts from './components/Posts';
import NewPostForm from './components/NewPostForm';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" 
            element={
              <>
                <Hero />
                <Quote />
              </>
            } 
          />
          <Route path="/post" 
          element={
            <>
              <Posts />
          
            </>
          } 
          />
          <Route path="/newpost" 
          element={
            <>
              <NewPostForm />
            </>
          } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
    // <div>
    //   <Navbar />
    //   <Hero />
    //   <Quote />
    //   <Footer />
    // </div>
  )
}

export default App;