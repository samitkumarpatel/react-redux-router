import React from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import './JsonPlaceholderHome.css'

export const JsonPlaceholderHome = () => {
  const { records } = useLoaderData();
  return (
    <div>
        <h1>JSON Placeholder Home</h1>
        <Link to="/json-placeholder">Dashboard</Link> |
        <Link to="/json-placeholder/users">Users</Link>
        <hr/>
        
        <Outlet />
        <hr/>
        {/* <Link to="/">home</Link> */}
    </div>
  )
}
