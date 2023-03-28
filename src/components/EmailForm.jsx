import { Input, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendMail() {
    if (name && email && message) {
      axios
        .post('http://localhost:5000/send', {
          name,
          email,
          message,
        })
        .then(() => alert('Message sent'))
        .catch(() => alert('Error happened'));
      return;
    }
    return alert('Fill in all the fields');
  }

  return (
    <Box sx={{ maxWidth: 900, p: 4, lineHeight: 1.8 }}>
      <h1>Connect w/ Jamie</h1>
      <form action="#">
        <br />
        <div>
          <label htmlFor="name" style={{ marginleft: 0 }}>
            Name:{' '}
          </label>{' '}
          <br />
          <Input
            sx={{
              bgcolor: '#bfbfbf',
              width: 260,
              borderRadius: 1,
              padding: 0.5,
            }}
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder=" Your name"
            required
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <br />
          <Input
            sx={{
              bgcolor: '#bfbfbf',
              width: 260,
              borderRadius: 1,
              padding: 0.5,
            }}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="   Your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message: </label>
          <br />
          <TextField
            sx={{
              bgcolor: '#bfbfbf',
              width: 260,
              borderRadius: 1,
            }}
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder=" Leave a comment"
            required
          />
        </div>
        <br />
        <button
          style={{ bgcolor: '#bfbfbf', fontSize: '1rem', width: 260 }}
          type="submit"
          onClick={() => sendMail()}
        >
          Send message
        </button>
      </form>
    </Box>
  );
};

export default EmailForm;
