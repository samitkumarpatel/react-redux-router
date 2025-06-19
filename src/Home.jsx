import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './store';
import './Home.css';

const Home = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div id='root__home'>
      <h2>Home</h2>
      <p>count vaule in store: {count}</p>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
};

export default Home;
