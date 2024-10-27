import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const FooterChatInput: React.FC = () => (
  <Box display="flex" alignItems="center" px={2} py={1} borderTop="1px solid #ddd">
    <TextField
      placeholder="Ask me anything..."
      variant="outlined"
      fullWidth
    />
    <IconButton color="primary">
      <SendIcon />
    </IconButton>
  </Box>
);

export default FooterChatInput;
