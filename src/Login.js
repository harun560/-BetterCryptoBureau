import React, { useState } from 'react';
import "./Login.css"
 
 export default function Login() {
  const [loginStatus, setLoginStatus] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Send a request to the server to authenticate the user's credentials
    authenticate(username, password).then(response => {
      if (response.success) {
        setLoginStatus('success');
      } else {
        setLoginStatus('failure');
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <label>
        password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <input type="submit" value="Submit" />
      {loginStatus === 'success' && <div>Login successful!</div>}
      {loginStatus === 'failure' && <div>Login failed. Please try again.</div>}
    </form>
  );
}