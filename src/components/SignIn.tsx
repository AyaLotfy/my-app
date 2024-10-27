import React from 'react';
import { Box, TextField, Button, Typography, Checkbox, Divider, IconButton } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const SignIn: React.FC = () => (
  <Box sx={{ width: 320, padding: 3, textAlign: 'center' }}>
    <Typography variant="h5" gutterBottom>
      Sign in to your account
    </Typography>
    
    <TextField
      fullWidth
      variant="outlined"
      label="Phone number or email"
      margin="normal"
    />
    <TextField
      fullWidth
      variant="outlined"
      label="Password"
      type="password"
      margin="normal"
    />
    
    <Typography
      variant="body2"
      color="primary"
      sx={{ textAlign: 'right', cursor: 'pointer', marginBottom: 2 }}
    >
      Forgot password?
    </Typography>
    
    <Button variant="contained" color="primary" fullWidth>
      Sign in
    </Button>

    <Box display="flex" alignItems="center" justifyContent="center" my={2}>
      <Checkbox />
      <Typography variant="body2">I am human</Typography>
      {/* You can place a captcha component here if you have it */}
    </Box>
    
    <Divider>Or</Divider>

    <Button variant="outlined" fullWidth startIcon={<AppleIcon />} sx={{ mt: 2 }}>
      Sign in with Apple ID
    </Button>
    <Button variant="outlined" fullWidth startIcon={<GoogleIcon />} sx={{ mt: 2 }}>
      Sign in with Google
    </Button>
    <Button variant="outlined" fullWidth startIcon={<FacebookIcon />} sx={{ mt: 2 }}>
      Sign in with Facebook
    </Button>

    <Typography variant="body2" mt={2}>
      Don’t you have an account? <Typography component="span" color="primary" sx={{ cursor: 'pointer' }}>Sign up</Typography>
    </Typography>
  </Box>
);

export default SignIn;
