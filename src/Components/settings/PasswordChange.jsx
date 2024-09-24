import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, TextField } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

export default function PasswordModal() {

    const navigate = useNavigate();
   
    const [data,setData]=React.useState({
        password:''
    });
    const [input, setInput]=React.useState({
        password:''
    })
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
    const handleSave=()=>{
        const storedUsers = JSON.parse(localStorage.getItem('user'));

        if (Array.isArray(storedUsers)) {
            // Find the user with the matching old password
            const userIndex = storedUsers.findIndex(user => user.password === data.password);
            if (userIndex !== -1) {
                // Update the user's password
                storedUsers[userIndex].password = input.password;
                localStorage.setItem('user', JSON.stringify(storedUsers));
                alert("Your password has been changed successfully");
                navigate('/login');
            } else {
                alert("Your old password is incorrect");
            }
        } else if (storedUsers && storedUsers.password === data.password) {
            // For single user
            storedUsers.password = input.password;
            localStorage.setItem('user', JSON.stringify(storedUsers));
            alert("Your password has been changed successfully");
            navigate('/login');
        } else {
            alert("Your old password is incorrect");
        }
        
        // Reset input fields
        setData({ password: '' });
        setInput({ password: '' });
    }
    

    return (
        <div>
            <div className="link">
                <li onClick={handleOpen}> Change Password</li>
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
                        <Typography id="modal-modal-title" variant="h6" gutterBottom sx={{ m: 0, }}>
                            Enter your old password
                        </Typography>
                        <ClearIcon onClick={handleClose} sx={{ mt:1, cursor: 'pointer' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField
                           name='password'
                           value={data.password}
                           onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                            sx={{ my: 1 }}
                            label="password"
                            type='password'
                            fullWidth
                        />
                        <Typography id="modal-modal-title" variant="h6" gutterBottom sx={{ m: 0, }}>
                            Enter your New password
                        </Typography>
                         <TextField
                            name='password'
                            value={input.password}
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                            sx={{ my: 1 }}
                            label="New-password"
                            type='password'
                            fullWidth
                        />
                        <Button variant="contained" color='secondary' fullWidth sx={{ mt: 2 }} onClick={handleSave}>
                            Save
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
