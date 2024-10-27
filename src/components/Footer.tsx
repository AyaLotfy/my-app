import React from 'react';
import { Box, TextField, IconButton, Button } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const Footer: React.FC = () => (
  <Box display="flex" alignItems="center" px={2} py={1} borderTop="1px solid #ddd">
    <Button startIcon={<PhotoIcon />}>Photo</Button>
    <Button startIcon={<AudiotrackIcon />}>Audio</Button>
    <Button startIcon={<AttachFileIcon />}>Select file</Button>
    <TextField
      placeholder="Ask me anything..."
      variant="outlined"
      fullWidth
      sx={{ mx: 2 }}
    />
    <IconButton color="primary">
      <SendIcon />
    </IconButton>
  </Box>
);

export default Footer;
