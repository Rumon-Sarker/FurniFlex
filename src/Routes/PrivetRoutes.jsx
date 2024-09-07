import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PrivetRoutes = ({ children }) => {
    const navigate = useNavigate();

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>)
    }
    else if (user) {
        return children;
    }
    else {
        return navigate("/login")
    }
};

export default PrivetRoutes;