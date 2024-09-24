
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FaceIcon from '@mui/icons-material/Face';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Face4Icon from '@mui/icons-material/Face4';
import Face6Icon from '@mui/icons-material/Face6';
import { Button } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import IndianTime from './Admin/IndianTime';
import UnitedStates from './Admin/UnitedStates';
import { useState } from 'react';
import Graph from './Admin/Graph';
import GraphPercentage from './Admin/GraphPercentage';
import MyDatePicker from './Admin/Date';


function Admin() {
  const [show, setShow] = useState(true)
  const [user5, setUser5] = useState(true)
  const [show2, setShow2] = useState(true)
  const [show3, setShow3] = useState(true)
  const [show4, setShow4] = useState(true)
  const [todo, setTodo] = useState();
  const [todo2, setTodo2] = useState()
  const [todo3, setTodo3] = useState()
  const [todo4, setTodo4] = useState()
  const [showUser, setShowUser] = useState(true)
  const [showUser2, setShowUser2] = useState(true)
  const [showUser3, setShowUser3] = useState(true)
  const [showUser4, setShowUser4] = useState(true)

  const TodoListUser1 = () => {
    const UserId = "anas@mail.com"
    const getTodos = JSON.parse(localStorage.getItem(`todos_${UserId}`))
    setTodo(getTodos)
    console.log(getTodos)
    console.log(getTodos[0].completed)
    setShow(false)

  }
  const TodoListUser2 = () => {
    const UserId = "aman@mail.com"
    const getTodos2 = JSON.parse(localStorage.getItem(`todos_${UserId}`))
    setTodo2(getTodos2)
    console.log(getTodos2)
    console.log(getTodos2[0].completed)
    setShow2(false)

  }
  const TodoListUser3 = () => {
    const UserId = "ankit@mail.com"
    const getTodos3 = JSON.parse(localStorage.getItem(`todos_${UserId}`))
    setTodo3(getTodos3)
    console.log(getTodos3)
    console.log(getTodos3[0].completed)
    setShow3(false)

  }
  const TodoListUser4 = () => {
    const UserId = "sonu@mail.com"
    const getTodos4 = JSON.parse(localStorage.getItem(`todos_${UserId}`))
    setTodo4(getTodos4)
    console.log(getTodos4)
    console.log(getTodos4[0].completed)
    setShow4(false)

  }

  const TodoListUser5 = () => {
    setUser5(false)
  }

  const DeletedUser = () => {
    setShowUser(false)


  }
  const DeletedUser2 = () => {
    setShowUser2(false)
  }
  const DeletedUser3 = () => {
    setShowUser3(false)
  }
  const DeletedUser4 = () => {
    setShowUser4(false)
  }



  return (
    <div className="admin-container">
      <div className='admin'>
        <h2>ADMIN PANEL</h2>
        <div className="cards">

          {show ? (<div className="box-1" style={{background:'#ffeb3b',color: '#f5f5f5',}}>
            <div className="icons">
              <SentimentSatisfiedAltIcon color='#f5f5f5' />
            </div>
            <div className="user-name">
              <h2>Name : User 1 </h2>
            </div>
            <div className="btn">
              <Button variant="contained" endIcon={<ListAltIcon />} onClick={TodoListUser1}>
                Show Todo
              </Button>
            </div>
          </div>) : (
            <>
              {showUser ? (<div className="user-1">
                <div className="todos-list">
                  <h3> 1.{todo[0].text}<span>completed:{todo[0].completed} true</span></h3>
                  <h3> 2.{todo[1].text}<span>completed:{todo[1].completed}true</span></h3>
                  <h3> 3.{todo[2].text}<span>completed:{todo[2].completed} false</span></h3>
                  <h3> 4.{todo[3].text}<span>completed:{todo[3].completed} true</span></h3>
                  <h3> 5.{todo[4].text}<span>completed:{todo[4].completed} true</span></h3>
                </div>
                <div className="btn">
                  <Button size='small' variant="outlined" onClick={DeletedUser} startIcon={<ListAltIcon />}>
                    Delete User
                  </Button>
                </div>
              </div>) : (<> <h3 className='box-2'>No user</h3></>)}

            </>

          )}



          {show2 ? (
            <div className="box-1" style={{background:'#ec407a',color: '#f5f5f5',}}>
              <div className="icons">
                <FaceIcon color='#f5f5f5' />
              </div>
              <div className="user-name">
                <h2>Name : User 2</h2>
              </div>
              <div className="btn">
                <Button variant="contained" endIcon={<ListAltIcon />} onClick={TodoListUser2} >
                  Show Todo
                </Button>
              </div>
            </div>
          ) : (
            <>
              {showUser2 ? (
                <div className="list-1">
                  <div className="todos-list">
                    <h3> 1. {todo2[0].text}<span>completed:{todo2[0].completed} true</span></h3>
                    <h3> 2. {todo2[1].text}<span>completed:{todo2[1].completed}true</span></h3>
                    <h3> 3. {todo2[2].text}<span>completed:{todo2[2].completed} true</span></h3>
                    <h3> 4. {todo2[3].text}<span>completed:{todo2[3].completed} false</span></h3>
                  </div>
                  <div className="btn">
                    <Button size='small' onClick={DeletedUser2} variant="outlined" startIcon={<ListAltIcon />} >
                      Deleted User
                    </Button>
                  </div>
                </div>
              ) : (<> <h3 className='box-2'> No user</h3></>)}

            </>
          )}


          {show3 ? (
            <div className="box-1" style={{background:'#79b6cb',color: '#f5f5f5',}}>
              <div className="icons">
                <AccountCircleIcon color='#f5f5f5' />
              </div>
              <div className="user-name">
                <h2>Name : User 3</h2>
              </div>
              <div className="btn">
                <Button variant="contained" endIcon={<ListAltIcon />} onClick={TodoListUser3}>
                  Show Todo
                </Button>
              </div>
            </div>
          ) : (
            <>
              {showUser3 ? (
                <div className="list-1">
                  <div className="todos-list">
                    <h3> 1.{todo3[0].text}<span>completed:{todo3[0].completed} false</span></h3>
                    <h3> 2.{todo3[1].text}<span>completed:{todo3[1].completed}true</span></h3>
                    <h3> 3.{todo3[2].text}<span>completed:{todo3[2].completed} true</span></h3>
                    <h3> 4.{todo3[3].text}<span>completed:{todo3[3].completed} false</span></h3>

                  </div>
                  <div className="btn">
                    <Button size='small' variant="outlined" onClick={DeletedUser3} startIcon={<ListAltIcon />} >
                      Deleted user
                    </Button>
                  </div>
                </div>
              ) : (<> <h3 className='box-2'>No user</h3></>)}

            </>
          )}


          {show4 ? (<div className="box-1" style={{background:'#4caf50',color: '#f5f5f5',}}>
            <div className="icons">
              <Face4Icon color='#f5f5f5'/>
            </div>
            <div className="user-name">
              <h2>Name : User 4</h2>
            </div>
            <div className="btn">
              <Button variant="contained" endIcon={<ListAltIcon />} onClick={TodoListUser4}>
                Show Todo
              </Button>
            </div>

          </div>) : (
            <>

              {showUser4 ? (<div className="list-1">
                <div className="todos-list">
                  <h3> 1.{todo4[0].text}<span>completed:{todo4[0].completed} false</span></h3>
                  <h3> 2.{todo4[1].text}<span>completed:{todo4[1].completed}true</span></h3>
                  <h3> 3.{todo4[2].text}<span>completed:{todo4[2].completed} true</span></h3>
                  <h3> 4.{todo4[3].text}<span>completed:{todo4[3].completed} true</span></h3>
                </div>

                <div className="btn">
                  <Button size='small' onClick={DeletedUser4} variant="outlined" startIcon={<ListAltIcon />}>
                    Deleted User
                  </Button>
                </div>
              </div>) : (<><h3 className='box-2'>No user</h3></>)}
            </>
          )}


          {user5 ? (<div className="box-1" style={{background:'#9e9e9e',  color: '#f5f5f5',}}>
            <div className="icons">
              <Face6Icon color='#f5f5f5' />
            </div>
            <div className="user-name">
              <h2>Name : User 5</h2>
            </div>
            <div className="btn">
              <Button variant="contained"  endIcon={<ListAltIcon/>} onClick={TodoListUser5}>
                Show Todo
              </Button>
            </div>

          </div>) : (
            <div className='box-1'>
              <h2>No Todos</h2>
            </div>)}
        </div>

      </div>

      <div className="time-zone">
        <MyDatePicker />
        <IndianTime />
        <UnitedStates />

      </div>
      <div className="graphs">
        <Graph />
        <GraphPercentage/>
      </div>
    </div>


  )
}

export default Admin
