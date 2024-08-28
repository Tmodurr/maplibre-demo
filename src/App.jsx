import React from 'react';
import {createTheme, MantineProvider, Container, Grid, ScrollArea, Box } from '@mantine/core';
import MapComponent from '@/components/MapComponent'
import '@mantine/core/styles.css';
import './App.css'



const theme = createTheme({
  /** Your theme override here */
});


function App() {
  return (
    <>
      <MantineProvider theme={theme}>
        <Container
          fluid
          style={{
            height: '100vh',
            width: '100vw',
            overflow: 'hidden', // Prevents overflow
            display: 'flex',
            flexDirection: 'column',
            padding: "0px"
          }}
        >
          {/* Header Bar */}
          <Box
            style={{
              height: '50px',
              backgroundColor: '#f5f5f5',
              borderBottom: '1px solid #e0e0e0',
              flexShrink: 0 // Fixed height
            }}
          >
            Header Content
          </Box>

          {/* Main Content */}
          <Box style={{ display: 'flex', height: '100%' , overflow: 'hidden' }}>
            <Grid align="stretch" overflow="hidden" style={{width: '100%'}}>
              {/* Left Column */}
              <Grid.Col
                span="auto"
                style={{
                  flexBasis: '33.33%', // 1/3 of the width
                  maxWidth: '300px', // Maximum width limit
                  borderRight: '1px solid #e0e0e0',
                  overflow: 'hidden',
                }}
              >
                  Left Column Content
              </Grid.Col>

              {/* Right Column */}
              <Grid.Col
                span="auto"
              >
                <MapComponent />
              </Grid.Col>
            </Grid>
          </Box>
        </Container>
      </MantineProvider>
    </>
  )
}

export default App
