import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { ThemeContext } from './Themes/ThemeChanger';

import Todos from './Todos';
function Home() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem('user')) || [];
  const loggedInUserEmail = localStorage.getItem('loggedInUserEmail')
  const loggedInUserPassword = localStorage.getItem('loggedInUserPassword')

  const loggedInUser = users.find(
    user => user.email === loggedInUserEmail && user.password === loggedInUserPassword
  )
  const handleAccount = () => {
    navigate('/setting')
  }

  const { theme } = useContext(ThemeContext)

  return (
    <div className='background-home'
      style={{ background: theme == 'light' ? "#ffff" : '#1B1212' }}>
      <div className="container top-section head"
        style={{
          background: theme == 'light' ? 'white' : 'transparent',
          border: theme == 'light' ? 'none' : '1px solid #ffff',
          color: theme == 'light' ? 'black' : '#ffff'
        }}>
        <div className="heading">
          <h2>Home Page</h2>
          <ManageAccountsIcon onClick={handleAccount} className='manage' />
        </div>
        <div>
 
        </div>

      </div>
      <div className="container-home" style={{
        background: theme == 'light' ? 'white' : 'transparent',
        border: theme == 'light' ? 'none' : '1px solid #ffff',
        color: theme == 'light' ? 'black' : '#ffff'
      }}>
       <Todos/>
      </div>


    </div>
  )
}

export default Home
