import React, { useState } from 'react';
import './App.css';
import pic from "./Images/pro.png"; // Import your image
import axios from 'axios'; // Import Axios for making HTTP requests
import zpic from "./Images/abc.png";
function App() {
  const [inputValue, setInputValue] = useState('');
  const [cardStatus, setCardStatus] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get('http://localhost:8080/get_card_status', {
        params: {
          mobile_number: inputValue
        }
      });
      
      // Set the card status state variable
      if (response.data.data.length === 0) {
        setCardStatus('No card found');
      } else {
        setCardStatus(response.data.data[0].statuses[response.data.data[0].statuses.length - 1].status);
      }
    } catch (error) {
      console.error('Error fetching card status:', error);
      // Handle error
    }
  };
  return (
    <div className="App">
      {/* Image container */}
      <div className="image-container">
        <img src={pic} alt="Logo" className="logo" />
      </div>
      
      {/* Main content */}
      <div className='Zywa'>
        <h1>Zywa</h1>
      </div>
      
      {/* Input container */}
      <div className="centered-container">
  <div className='header'>Get Card Status</div> {/* Added header */}
  <div className="image-container1">
  <img src={zpic} alt="Logo" className="zpic" />
      </div>
  <div className='enter'>
    <div className='ABC'>Enter Card Id or Mobile Number</div>
    <input 
      type="text" 
      placeholder="Type here..."
      value={inputValue}
      onChange={handleChange} />
    <button onClick={handleSubmit}>Submit</button>
    <div className='status'>{cardStatus}</div>
  </div>
</div>

    </div>
  );
}

export default App;
