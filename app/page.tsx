'use client';

import { useState } from 'react';
import { TextInput, PasswordInput, Button, Notification } from '@mantine/core';
import { supabase } from '@/lib/supabaseClient';

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100dvh' }}>
      <div style={{ maxWidth: 300, width: '100%', padding: '2rem' }}>
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
      </div>
    </div>
  );
}
