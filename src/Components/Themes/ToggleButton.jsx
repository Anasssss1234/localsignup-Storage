
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import { useContext } from 'react';
import { ThemeContext } from './ThemeChanger';

function ToggleButton() {
 const {theme,handleClick} = useContext(ThemeContext);
  return (
    <div>
        <div className='theme'  style={{background:theme=='light'? "#ffff":'#1B1212', color:theme=="light"?'#1B1212':'#ffff'}}>
        <DarkModeTwoToneIcon  onClick={handleClick}  sx={{fontSize:'30px', margin:'20px 20px 0px 0px',}}  />
        </div>
  
    </div>
  )
}

export default ToggleButton
