import { Box } from '@mui/system';
import React from 'react';
import CardDetails from './CardDetails';
import { useSelector } from 'react-redux';

const Card = () => {
  const { label, data } = useSelector((state) => state.mapReducer);

  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
      }}
    >
      {data.map((item, index) => (
        <CardDetails item={item} key={index} />
      ))}
    </Box>
  );
};

export default Card;
