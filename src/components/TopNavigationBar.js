import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function TopNavigationBar() {
    const [isSignin, setIsSignin] = useState(false)

    const handlClickSignin = (event) => {
        //Need to change
        setIsSignin(true)
    };
    const handlClickSignout = (event) => {
        //Need to change
        setIsSignin(false)
    };


    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Job Routing
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button
                        onClick={isSignin ? handlClickSignout : handlClickSignin}
                        variant="contained"
                        startIcon={isSignin ? <LogoutIcon /> : <LoginIcon />}
                        sx={{
                            backgroundColor: "#423e3e",
                            display: { xs: 'none', sm: 'none', md: 'flex', lg: "flex" },
                        }}
                    >
                        {isSignin ? 'SIGN OUT' : 'SIGN IN'}
                    </Button>
                    <Button
                        onClick={isSignin ? handlClickSignout : handlClickSignin}
                        variant="contained"
                        startIcon={isSignin ? <LogoutIcon /> : <LoginIcon />}
                        sx={{
                            backgroundColor: "#423e3e",
                            display: { xs: 'flex', sm: 'flex', md: 'none' },
                        }}
                    />

                </Toolbar>
            </AppBar>
        </Box>
    );
}

