import React, { useState } from 'react';
import { Container, IconButton, Stack, Typography, Badge, Box, InputBase, List, ListItem, ListItemText, Menu, MenuItem, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate, Link } from 'react-router-dom';

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '22px',
  border: '1px solid #ff69b4',
  backgroundColor: '#ffffff',
  '&:hover': { border: '1px solid #ff1493' },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: '350px',
  display: 'flex',
  alignItems: 'center',
}));

const IconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ff69b4',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const CartBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#ff1493',
    color: '#fff',
  },
}));

const categories = ['All Categories', 'Make-UP', 'Furniture', 'Foods'];

function CustomNavbar() {
  const navigate = useNavigate();
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const isMenuOpen = Boolean(menuAnchor);

  const openMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const selectCategory = (index) => {
    setActiveCategoryIndex(index);
    setMenuAnchor(null);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  return (
    <Box sx={{ bgcolor: '#ffe4e1', borderBottom: '1px solid #ffe4e1', boxShadow: '0px 2px 8px rgba(255, 105, 180, 0.1)' }}>
      <Container sx={{ py: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        <Typography variant="h5" onClick={() => navigate('/')} sx={{ fontWeight: 'bold', color: '#ff1493', cursor: 'pointer' }}>
          E-Commerce
        </Typography>

        <SearchContainer>
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
          <SearchInput placeholder="Search products..." />
        </SearchContainer>

        <Stack direction="row" alignItems="center" spacing={2}>
          <List component="nav" sx={{ p: 0, bgcolor: '#ffffff', 
            borderRadius: '20px', border: '1px solid #ffe4e1' }}>
            <ListItem button onClick={openMenu} sx={{ py: 0.5, px: 2 }}>
              <ListItemText 
                secondary={categories[activeCategoryIndex]} 
                secondaryTypographyProps={{ style: { color: '#ff69b4', fontWeight: '500' } }} 
              />
              <ExpandMore sx={{ fontSize: "18px", color: '#ff69b4', ml: 1 }} />
            </ListItem>
          </List>

          <Menu anchorEl={menuAnchor} open={isMenuOpen} onClose={closeMenu}>
            {categories.map((item, idx) => (
              <MenuItem key={item} selected={idx === activeCategoryIndex} 
              onClick={() => selectCategory(idx)}>
                {item}
              </MenuItem>
            ))}
          </Menu>

          <Stack direction="row" spacing={1}>
            <IconButton size='large' onClick={() => navigate("/cart")}>
              <CartBadge badgeContent={4}>
                <ShoppingCartIcon sx={{ color: '#ff69b4' }} />
              </CartBadge>
            </IconButton>

            <IconButton onClick={() => navigate("/profile")}>
              <Person2OutlinedIcon sx={{ color: '#ff69b4' }} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default CustomNavbar;
