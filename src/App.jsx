import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './store';
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Vite + React</h1>
      <nav>
        <Link className='router__link' to="/">Home</Link> | <Link className='router__link' to="/about">About</Link>
      </nav>
      <div style={{ margin: '1em 0' }}>
        <p>Global: {count}</p>
        <button onClick={() => dispatch(increase())} style={{ marginLeft: 8 }}>Increase</button>
        <button onClick={() => dispatch(decrease())} style={{ marginLeft: 4 }}>Decrease</button>
      </div>
      <hr/>
      <Outlet />
    </div>
  )
}

export default App
