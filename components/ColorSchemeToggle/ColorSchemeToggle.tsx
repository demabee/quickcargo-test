'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export function ColorSchemeToggle() {
  const router = useRouter();
  const { setColorScheme } = useMantineColorScheme();

  return (
    <>
      <Group justify="center" mt="xl">
        <Button onClick={() => setColorScheme('light')}>Light</Button>
        <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      </Group>
      <LoginButtonWrapper>
        <Button onClick={() => router.push('/login')}>Login</Button>
      </LoginButtonWrapper>
    </>
  );
}

const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
