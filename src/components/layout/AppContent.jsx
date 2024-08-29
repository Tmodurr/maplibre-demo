import React from 'react';
import { Box, Grid, useMantineTheme, lighten } from '@mantine/core';
import MapComponent from '@/components//organisms/MapComponent';


const AppContent = () => {
  const theme = useMantineTheme();

  return (
    <Box>
      <Grid
        align="stretch"
        style={{ width: '100%', height: '100%' }}
      >
        <Grid.Col
          span="auto"
          style={{
            maxWidth: '300px', // Optional: limit the width of the side pane
            borderRight: '1px solid #e0e0e0',
            overflow: 'hidden', // Ensure no overflow
          }}
        >
          Sidepane goes here.
        </Grid.Col>
        <Grid.Col
          span="auto"
          style={{ height: '100%', overflow: 'auto' }}
        >
          <MapComponent />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default AppContent;
