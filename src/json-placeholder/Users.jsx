import './Users.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser, removeUser } from '../store';

export const Users = () => {
  const dispatch = useDispatch();
  
  const {users, error, loading} = useSelector((state) => state.user);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;  
  return (
    <div>
        Total user count: {users.length}.
        <i 
          title="Reset user list"
          onClick={() => dispatch(fetchAllUser())}>&#8635; to reset user list</i> 
        <hr/>
        <input type='text' placeholder='Search user by name'></input>
        {users.map((user, idx) => (
            <p key={user.id || idx} style={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
            {user.name}
            <i onClick={() => dispatch(removeUser(user.id))}>&#10060;</i>
            </p>
        ))}
    </div>
  )
}
