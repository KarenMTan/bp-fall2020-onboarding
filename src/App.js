import React from 'react';
import Post from './Post';
import './App.css';

function App() {
  return (
    <>
      <Post prepend="Counter:" />
      <Post />
      <Post />
      <Post />
    </>
  );
}

export default App;
