import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="text-center">
      <Navbar/>
      <div className="bottomContainer">
        <h1>Welcome to Your Travel Journal</h1>
      </div>
    </div>
  );
}

export default Home;
