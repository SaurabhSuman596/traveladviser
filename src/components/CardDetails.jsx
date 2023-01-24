import { Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TinderCard from 'react-tinder-card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './globalComp.css';

const CardDetails = ({ item }) => {
  const handleSwipe = (direction) => {
    console.log('You swiped ' + direction);
  };
  return (
    <TinderCard className="cardTinder" key={item.id} onSwipe={handleSwipe}>
      <img
        className="cardImage"
        src="https://cdn.discordapp.com/attachments/1062321172454309920/1062322754499641354/widebody_huracan_-202.jpg"
        alt="imag"
      />
      <Box p={2}>
        <Typography variant="h5">{item.name}</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 2,
            gap: 2,
          }}
        >
          <Rating value={item.types.length} disabled />
          <Typography>{item.types.join(' ')}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 2,
            gap: 2,
          }}
        >
          <LocationOnIcon />
          <Typography noWrap="break-word">{item.address}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            overflow: 'hidden',
          }}
        >
          <LocalPhoneIcon />
          <Typography>{item.distance}m</Typography>
        </Box>
      </Box>
    </TinderCard>
  );
};

export default CardDetails;
