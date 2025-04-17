
import React from 'react';
import { Box, Flex } from '@mantine/core';
import MapComponent from '@/components/organisms/MapComponent';

const AppContent = () => {
  return (
    <Flex direction="column" h="100vh">
      <Box component="header">
        {/* AppHeader is rendered by the parent layout */}
      </Box>
      <Flex style={{ flex: 1, overflow: 'hidden' }}>
        <Box
          style={{
            width: '300px',
            height: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: '16px',
            backgroundColor: '#f9f9f9',
            whiteSpace: 'normal',
            borderRight: '1px solid #e0e0e0',
          }}
        >
          <p></p>
        </Box>
        <Box style={{ flex: 1, backgroundColor: '#e6e6e6', height: '100%' }}>
          <MapComponent />
        </Box>
      </Flex>
    </Flex>
  );
};

export default AppContent;
