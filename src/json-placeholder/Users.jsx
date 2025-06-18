import './Users.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../store';

export const Users = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  return (
    <div>
        Users {users.length > 0 ? 'found' : 'not found'}
        <hr/>
        {users.map((user, idx) => (
            <p key={user.id || idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {user.name}
            <button
                aria-label="Delete user"
                onClick={() => dispatch(removeUser(user.id))}
                style={{ background: 'none', cursor: 'pointer', color: 'red', fontSize: '0.9em'}}>&#10060;</button>
            </p>
        ))}
    </div>
  )
}
