import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => (
  <Box display="flex" height="100vh">
    <Sidebar />
    <Box display="flex" flexDirection="column" flex={1}>
      <MainContent />
      <Footer />
    </Box>
  </Box>
);

export default App;
