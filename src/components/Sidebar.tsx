import React from 'react';
import { Box, List, ListItem, ListItemText, Button, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

const Sidebar: React.FC = () => (
  <Box sx={{ width: 280, bgcolor: '#f5f5f5', height: '100vh', p: 2 }}>
    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
      <Typography variant="h6">Logo here</Typography>
    </Box>
    <Button variant="contained" color="primary" fullWidth startIcon={<AddIcon />}>
      New Chat
    </Button>
    {/* <List>
      <Typography variant="subtitle1" mt={2}>Recent</Typography>
      <ListItem button><ListItemText primary="What is AI assistant?" /></ListItem>
      <ListItem button><ListItemText primary="Best laptop brands and features" /></ListItem>
    </List>
     */}
   <List>
      <Typography variant="subtitle1" mt={2}>Recent</Typography>
      <ListItem ><ListItemText primary="What is AI assistant?" /></ListItem>
      <ListItem ><ListItemText primary="Best laptop brands and features" /></ListItem>
    </List>
     
    <Box mt={2}>
      <Typography variant="subtitle1">Preferences</Typography>
      <Typography variant="subtitle1">Help & Support</Typography>
    </Box>
  </Box>
);

export default Sidebar;
