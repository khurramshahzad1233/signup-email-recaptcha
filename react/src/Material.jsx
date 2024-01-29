import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function Material() {
  return (
    <>
    <Box bgcolor={"yellow"} display={"flex"} justifyContent={"center"}>
        <Button variant='contained' fullWidth href='/home'>My Button</Button>
    </Box>

    <Box mt={"10px"} justifyContent={"center"} display={"flex"}>
        <Button variant='outlined' href='/home'>Link Button</Button>
    </Box>
    
    </>
    
  );
}
