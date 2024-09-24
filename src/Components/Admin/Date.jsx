import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


function MyDatePicker() {

  const [startDate, setStartDate] = useState(null);
  
  return (
    <>
    <div className="date-picker">
      <h2> Date Picker</h2>
    <DatePicker
     selected={startDate}
     onChange={ date=> setStartDate(date)}
     dateFormat='yyyy/MM/dd'
     showYearDropdown
     scrollableYearDropdown
     placeholderText='YYYY/MM/DD'
     className='date' 
    />

    </div>
   
    
    
    
    </>
  )
}

export default MyDatePicker
