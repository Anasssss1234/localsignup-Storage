import React, { useContext } from 'react'
import BasicModal from './LogOut'
import DeleteModal from './DeleteAccount'
import PasswordModal from './PasswordChange'
import { ThemeContext } from '../Themes/ThemeChanger'

function Setting() {
  const {theme}=useContext(ThemeContext)
  return (
    <div className='background'
     style={{background:theme=='light'? "#ffff":'#1B1212'}}>
      <div className="container"
       style={{background:theme=='light'?'white':'transparent',
        border:theme=='light'?'none':'1px solid #ffff',
        color:theme=='light'?'black':'#ffff'}}>
      <div>
        <h2>setting</h2>
        <ul>
          <BasicModal />
          <DeleteModal/>
          <PasswordModal/>
        </ul>
      </div>
    </div>
    </div>
    
  )
}

export default Setting
