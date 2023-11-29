import React, { useState } from 'react';
import './OTPVerification.css';


const OTPVerification = ({ email }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle OTP verification logic
  };

  return (
    <div className="otp-verification-container">
      <form onSubmit={handleSubmit}>
        <h2>OTP Verification</h2>
        <p>We've sent a verification code to your email - {email}</p>
        <div>
          <input 
            type="text" 
            placeholder="Enter verification code" 
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OTPVerification;
