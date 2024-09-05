import React from 'react';
import { Box, Grid, useMantineTheme, lighten } from '@mantine/core';
import MapComponent from '@/components//organisms/MapComponent';
import classes from './AppContent.module.css'

const AppContent = () => {
  const theme = useMantineTheme();

  return (
    <div 
      style={{height: "100%"}}
      className={classes.content__wrapper} >
      <Grid
        style={{ width: '100%', height: '100%' }}
        
      >
        <Grid.Col
          span="auto"
          className={classes.sidepane__container}
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
        Map goes here.
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default AppContent;
