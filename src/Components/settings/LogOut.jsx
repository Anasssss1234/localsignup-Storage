import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';



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

export default function BasicModal() {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogout = (e) => {
        e.preventDefault();
        
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('loggedInUserEmail')
        localStorage.removeItem('loggedInUserPassword')
        navigate('/login')
    }


    return (
        <div>
            <div className="link">
                <li onClick={handleOpen}> Log out your Account </li>
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
                            Are your Sure to Log out your account?
                        </Typography>
                        <ClearIcon onClick={handleClose} sx={{ mt: 2, cursor: 'pointer' }} />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Button variant="contained" color='secondary' fullWidth sx={{ mt: 2 }} onClick={handleLogout} >
                            Yes
                        </Button>
                        <Button variant="contained" color='secondary' fullWidth sx={{ mt: 2, ml: 2 }} onClick={handleClose} >
                            No
                        </Button>
                    </Box>

                </Box>
            </Modal>
        </div>
    );
}
