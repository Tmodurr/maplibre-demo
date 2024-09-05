import React from 'react';
import { createTheme, MantineProvider, Grid, Box, AppShell, Burger } from '@mantine/core';
import AppHeader from '@/components/layout/AppHeader'
import AppContent from './components/layout/AppContent';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';
import './App.css';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
});

function App() {

  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        padding={0}
        style={{ height: '100%', width: '100%'}}
      >
        <AppShell.Header>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <div>Logo</div>
        </AppShell.Header>
        <AppShell.Main style={{ height: '100%', width: '100%', paddingTop: ".5rem"}} >
          <AppContent  />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
