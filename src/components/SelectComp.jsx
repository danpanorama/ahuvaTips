import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

 function SelectComp(props) {


  

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">תפקיד</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
       onChange={props.personJob}
        >
          <MenuItem value={'waiter'}>מלצר</MenuItem>
          <MenuItem value={'Washing'}>שוטף</MenuItem>
          <MenuItem value={'cook'}>טבח</MenuItem>
          <MenuItem value={'hostess'}>מארחת</MenuItem>
          <MenuItem value={'manege'}>אחמ"ש</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default SelectComp