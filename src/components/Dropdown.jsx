import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Map';

const Dropdown = () => {
  const [choose, setChoose] = useState('');
  const dispatch = useDispatch();
  const mapData = useSelector((state) => state.mapReducer);

  const handleChange = (e) => {
    setChoose(e.target.value);
    fetchData('', dispatch, mapData.latlng);
  };

  return (
    <Box>
      <Typography id="selectChoose" variant="h5">
        Choose
      </Typography>
      <Box sx={{ minWidth: 120, marginBottom: 1 }}>
        <FormControl fullWidth varient="standard">
          <Select value={choose} label="Age" onChange={handleChange}>
            <MenuItem value="restaurent">restaurent</MenuItem>
            <MenuItem value="school">School</MenuItem>
            <MenuItem value="supermarket">Super market</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Dropdown;
