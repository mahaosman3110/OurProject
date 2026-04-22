import React, { useState } from 'react';
import { 
  Container, IconButton, Stack, Typography, Badge, Box,
  InputBase, List, ListItem, ListItemText, Menu, MenuItem, styled 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '22px',
  border: '1px solid #ff69b4',
  backgroundColor: '#ffffff', 
  '&:hover': {
    border: '1px solid #ff1493',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '350px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ff69b4',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#ff1493',
    color: '#fff',
  },
}));

const options = ['All Categories', 'Car', 'Clothes', 'Electronics'];

function CustomNavbar1() {
    const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ 
      bgcolor: '#fff5f7', 
      borderBottom: '1px solid #ffe4e1',
      boxShadow: '0px 2px 8px rgba(255, 105, 180, 0.1)' 
    }}>
      <Container sx={{ py: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ff1493', cursor: 'pointer' }}>
          E-commerce
        </Typography>

        
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search products..." />
        </Search>

        
        <Stack direction="row" alignItems="center" spacing={2}>
          
          <List component="nav" sx={{ p: 0, bgcolor: '#ffffff', borderRadius: '20px', border: '1px solid #ffe4e1' }}>
            <ListItem
              button
              onClick={handleClickListItem}
              sx={{ py: 0.5, px: 2 }}
            >
              <ListItemText 
                secondary={options[selectedIndex]} 
                secondaryTypographyProps={{ style: { color: '#ff69b4', fontWeight: '500' } }} 
              />
              <ExpandMore sx={{ fontSize: "18px", color: '#ff69b4', ml: 1 }} />
            </ListItem>
          </List>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {options.map((option, index) => (
              <MenuItem key={option} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
                {option}
              </MenuItem>
            ))}
          </Menu>

          <Stack direction="row" spacing={1}>
            <IconButton size='large'>
              <Link to="/cart" style={{color:'inherit',textDecoration:'none'}}/>
              <StyledBadge badgeContent={4}>
                <ShoppingCartIcon  onClick={() => navigate("/cart")} sx={{ color: '#ff69b4' }} />
              </StyledBadge>
            </IconButton>

            <IconButton>
              <Person2OutlinedIcon sx={{ color: '#ff69b4' }} />
            </IconButton>
          </Stack>

        </Stack>
      </Container>
    </Box>
  );
}

export default CustomNavbar1;
