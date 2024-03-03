import React from 'react';
import { Counter } from '../features/counter/Counter';

 
const Home = () => {
  
  return  (
    <div>
      <img src={require('../image.PNG')} className="App-logo" alt="logo"/>
      <Counter />
    </div>
  )

};

export default Home;