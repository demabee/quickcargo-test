'use client';

import { useState } from 'react';
import { TextInput, PasswordInput, Button, Notification } from '@mantine/core';
import styled from 'styled-components';
import { supabase } from '@/lib/supabaseClient';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa; /* Optional: Set a background color */
`;

const FormWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
  background-color: black;
  border-radius: 8px; /* Optional: Add border radius */
`;

export default function HomePage() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Hello, John Mark');
    }
  };

  return (
    <Container>
      <FormWrapper>
        <TextInput
          label="Username"
          placeholder="Enter your email"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
          mt="sm"
        />
        <Button onClick={handleLogin} fullWidth mt="md">
          Login
        </Button>
        {message && (
          <Notification withCloseButton={false} mt="md" color={message.startsWith('Error') ? 'red' : 'green'}>
            {message}
          </Notification>
        )}
      </FormWrapper>
    </Container>
  );
}
