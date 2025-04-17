
import React from 'react';
import { Box, Group, Image, Text, Stack } from '@mantine/core';

const AppHeader = () => {
  return (
    <Box
      style={{
        height: '70px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        flexShrink: 0,
      }}
    >
      <Group align="left" spacing="sm">
        <Stack spacing={0} style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <Text size="lg" weight={600} color="black">MapLibre Skeleton App</Text>
          <Text size="xs" color="gray">Frontend Geospatial WebAPI Demo</Text>
        </Stack>
      </Group>
    </Box>
  );
};

export default AppHeader;
