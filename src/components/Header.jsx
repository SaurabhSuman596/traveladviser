import { Box } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#3847AC',
        p: 2,
        color: 'white',
        fontSize: 30,
        '&:hover': {
          backgroundColor: '#1565C0',
        },
        cursor: 'pointer',
      }}
    >
      Travel Adviser
    </Box>
  );
};

export default Header;
