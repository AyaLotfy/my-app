// import React from 'react';
// import { Box } from '@mui/material';
// import Sidebar from './components/Sidebar';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';

// const App: React.FC = () => (
//   <Box display="flex" height="100vh">
//     <Sidebar />
//     <Box display="flex" flexDirection="column" flex={1}>
//       <MainContent />
//       <Footer />
//     </Box>
//   </Box>
// );

// export default App;


import React from 'react';
import { Box, Divider } from '@mui/material';
import SignIn from './components/SignIn';
import WelcomeMessage from './components/WelcomeMessage';
import FooterChatInput from './components/FooterChatInput';

const App: React.FC = () => (
  <Box display="flex" height="100vh">
    <Box display="flex" alignItems="center" justifyContent="center" width="30%">
      <SignIn />
    </Box>
    <Divider orientation="vertical" flexItem />
    <Box display="flex" flexDirection="column" flex={1}>
      <WelcomeMessage />
      <FooterChatInput />
    </Box>
  </Box>
);

export default App;
