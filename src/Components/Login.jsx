import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import BasicModal from '../Components/SignUp'
import { ThemeContext } from "./Themes/ThemeChanger";
import UserAdmin from "./settings/UserAdmin";


function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: ''
  })


  const handleLog = (e) => {
    e.preventDefault();
    setInput('');

    const users = JSON.parse(localStorage.getItem('user')) || []

    if (users.length > 0) {
      const loggedUser = users.find(
        (user) => user.email === input.email && user.password === input.password
      )

      if (loggedUser) {
        localStorage.setItem('loggedIn', true)
        localStorage.setItem('loggedInUserEmail', input.email)
        localStorage.setItem('loggedInUserPassword', input.password)

        navigate('/');
        alert("Logged In")

        // Clear input only after successful login
        setInput({ email: '', password: '' });

      }
      else {
        alert("Invalid credentials")
      }
    } else {
      alert('No User found, please signup first')
    }

  }

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className="background"
        style={{ background: theme == 'light' ? "#ffff" : '#1B1212' }} >
        <div className="container"
          style={{
            background: theme == 'light' ? 'white' : 'transparent',
            border: theme == 'light' ? 'none' : '1px solid #ffff'
          }} >
          <div className="input">
            <input type='email' placeholder='Email address' name='email'
              value={input.email}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}

            />
          </div>
          <div className="input">
            <input type='password' placeholder='Password' name='password'
              value={input.password}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
          </div>
          <div className="anchor">
            <Link to='/' onClick={handleLog}>Log in</Link>
          </div>

          <div className="anchor1">
            <UserAdmin />
          </div>
          <div className="break">
            <hr />
          </div>
          <BasicModal />
        </div>
      </div>
    </>
  )
}

export default Login
