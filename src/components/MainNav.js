import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from "@material-ui/icons/Search";
import TvIcon from "@material-ui/icons/Tv";
import { useNavigate } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(value === 0) navigate('/');
    else if( value=== 1) navigate('/movies');
    else if( value=== 2) navigate('/series');
    else if( value=== 3) navigate('/search');
  }, [value, navigate])
  

  return (
    <Box 
        sx={{ 
            width: '100%',  
            position: 'fixed', 
            bottom: '0',
            
        }}
        >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{backgroundColor: '#2d313a'}}
        
      >
        <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color:"white"}}  label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
