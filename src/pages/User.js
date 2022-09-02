import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { deleteUser } from '../store/actions/user';

const User = () => {

  const users = useSelector((state) => {
    return state.data.users
  });

  const dispatch = useDispatch();

  return (
    <div>
      {
        users.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.contact}</p>
              <p>{user.address}</p>
              <button onClick={()=>dispatch(deleteUser(index))}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default User;
