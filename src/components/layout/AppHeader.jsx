import React from 'react';
import { Box } from '@mantine/core';

const AppHeader = () => {
  return (
    <Box
      style={{
        height: '50px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #e0e0e0',
        flexShrink: 0, // Fixed height
      }}
    >
      Header Content
    </Box>
  );
};

export default AppHeader;
