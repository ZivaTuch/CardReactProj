import { Add } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React from 'react';
import ROUTES from '../routes/routesModel';
import { useNavigate } from 'react-router-dom';


export default function AddButtonProvider() {
  const navigate = useNavigate();
  return (
    <Fab color="info" aria-label="create new card" sx={{ border: 1 }} onClick={() => navigate(ROUTES.CREATE_CARD)}>
    <Add />
  </Fab>

  
  );
}
