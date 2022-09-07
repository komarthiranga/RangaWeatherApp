import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', marginTop: '50px', justifyContent: 'center' }}>
      <CircularProgress /> <p style={{marginTop: '10px', marginLeft: '15px'}}>Loading please wait...</p>
    </Box>
  );
}