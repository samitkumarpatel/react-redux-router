import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './store';
import './About.css';
const About = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div id='root__about'>
      <h2>About</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
};

export default About;
