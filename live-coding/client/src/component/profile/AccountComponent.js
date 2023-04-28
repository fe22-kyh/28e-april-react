import { useState, useEffect } from 'react';
import userService from './../../service/userService.js';
 
export default function AccountComponent() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(userService.getUsername());
  }, [])

  return (
    <>
      <h2>Account profile</h2>
      <p>Username: {username}</p>
    </>
  )
}