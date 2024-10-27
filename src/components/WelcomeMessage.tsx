import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const WelcomeMessage: React.FC = () => (
  <Box sx={{ flex: 1, padding: 3 }}>
    <Typography variant="h5" gutterBottom>
      Welcome back
    </Typography>
    <Card variant="outlined" sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="body2">
          Information for your AI assistant: ex. AI personal assistants are advanced software programs that use artificial intelligence to perform daily personal tasks. They can operate as AI-powered text assistants, voice bots, or a combination of both.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default WelcomeMessage;
