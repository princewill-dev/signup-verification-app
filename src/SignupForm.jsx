import React, { useState } from 'react';
import './SignupForm.css';


const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the signup logic, possibly sending a request to your backend
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Signup Form</h2>
        <div>
          <input 
            type="text" 
            placeholder="Username" 
            // add onChange handler to update state
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Confirm Password" 
            // add onChange handler to update state
          />
        </div>
        <button type="submit">Signup</button>
        <p>Already a member? Login here</p>
      </form>
    </div>
  );
};

export default SignupForm;
