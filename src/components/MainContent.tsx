import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const MainContent: React.FC = () => (
  <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
    <Typography variant="h5">Welcome back, Aya Lotfy</Typography>
    {/* Placeholder for a logo or loading icon */}
    <Avatar sx={{ width: 64, height: 64, mt: 3, bgcolor: 'primary.main' }}>
      {/* Use any suitable icon */}
    </Avatar>
  </Box>
);

export default MainContent;
