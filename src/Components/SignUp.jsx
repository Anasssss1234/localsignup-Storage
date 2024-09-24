import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useNavigate} from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [input, setInput] = React.useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    let existingData = JSON.parse(localStorage.getItem('user')) || [];
    
      if (existingData.length >= 5) {
        alert("Only 5 users allowed");
        return;
      }
  
      existingData.push(input);
      localStorage.setItem("user", JSON.stringify(existingData));
  
      alert("Your account has been successfully created");
      setOpen(false);
  
      // Clear input fields after successful signup
      setInput({ name: '', email: '', password: '' });
    
  }

  return (
    <div>
      <div className="link">
        <button onClick={handleOpen}> Create new account </button>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <Typography id="modal-modal-title" variant="h4" gutterBottom sx={{ m: 0, }}>
              SignUp
            </Typography>
            <ClearIcon onClick={handleClose} sx={{ mt: 2, cursor: 'pointer' }} />
          </Box>
          <Typography id="modal-modal-description" >
            it's quick and easy.
          </Typography>
          <TextField
            name='name'
            value={input.name}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            sx={{ my: 1 }}
            label="Name"
            type='text'
            autoComplete='off'
            fullWidth
          />
          <TextField
            name='email'
            value={input.email}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            sx={{ my: 1 }}
            label="Email"
            type='email'
            autoComplete='off'
            fullWidth
          />
          <TextField
            name='password'
            value={input.password}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            sx={{ my: 1 }}
            label="Password"
            type='password'
            autoComplete='off'
            fullWidth
          />
          <Button variant="contained" color='secondary' fullWidth sx={{mt: 2}} onClick={handleSubmit}  >
            Sign Up
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
