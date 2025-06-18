import React from 'react'
import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const {users, error, loading} = useSelector((state) => state.user);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      Total user count :{users.length}
    </div>
  )
}
