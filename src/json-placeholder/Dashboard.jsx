import React from 'react'
import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const users = useSelector((state) => state.user.users);
  return (
    <div>
      Total number of available users are :{users.length}
    </div>
  )
}
