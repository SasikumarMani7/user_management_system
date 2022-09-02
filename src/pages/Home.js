import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/actions/user'
import './Home.css'

const Home = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    address: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    })
  }
  const dispatch = useDispatch();
  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addUser(user));
    setUser({
      name: "",
      email: "",
      contact: "",
      address: ""
    });
  }

  return (
    <div className='home'>
      <h1>Enter User Details</h1>
      <form className='home__container'>
        <input placeholder='Enter your Name' value={user.name} name='name' onChange={handleChange} />
        <br />
        <br />
        <input placeholder='Enter your Email' value={user.email} name='email' onChange={handleChange} />
        <br />
        <br />
        <input placeholder='Enter your Mobile no' value={user.contact} name='contact' type='number' onChange={handleChange} />
        <br />
        <br />
        <textarea placeholder='Enter your Address' value={user.address} name='address' onChange={handleChange} />
        <br />
        <br />
        <button onClick={handleAdd}>Submit</button>
      </form>
    </div>
  )
}

export default Home;
