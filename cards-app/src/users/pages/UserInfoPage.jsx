import React, { useState, useEffect } from "react";
import { Card, CardContent, Container,  Grid,  Paper,  Typography  } from "@mui/material";
import { getUser } from "../services/usersApiService";
import useAxios from "../../hooks/useAxios";
import PageHeader from "../../components/PageHeader";
import { useTheme } from "../../providers/ThemeProvider";
import { Check, Close } from "@mui/icons-material";
import Map from "../../forms/map/Map";
import "../../styles/styles.css"

export default function UserInfoPage() {
  const [userProfile, setUserProfile] = useState(null);
  const { isDark } = useTheme();  
  useAxios();
  const getUserHandler = async () => {
    const userLocal = await getUser();
    setUserProfile(userLocal);
  };

  useEffect(() => {
    getUserHandler();
  }, []);

  if (!userProfile) {
    return <Typography variant="h3">Loading... please wait</Typography>
  };

  return (
    <Container
      sx={{ color: isDark ? "white" : "inherit" }}
    >
      <PageHeader
        title="User profile"
        subtitle="Here you can see your user profile"
      />
      <div className="root">
        <Paper className="paper">
        <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item>             
                <img src={userProfile.image.url} alt={userProfile.image.alt}className="smallImage"/>     
            </Grid>
          <Grid item>
            <Typography variant="h5" component="h1">
           <b>{userProfile.name.first}  {userProfile.name.last}</b>
            </Typography>
            <Typography variant="body1">{userProfile.email}</Typography>
            <Typography variant="body1">{userProfile.phone}</Typography>
          </Grid>
        </Grid>
        
      <div className="mapPageStyle">
      <Card > 
        <CardContent>
          <Typography variant="body1">
           <b> Name:</b>  {userProfile.name.first}  {userProfile.name.last}
          </Typography>
             <Typography variant="body1">
             <b> Email:</b> {userProfile.email}
          </Typography>
          <Typography variant="body1">
          <b>Address:</b> {userProfile.address.street}  {userProfile.address.houseNumber}. {userProfile.address.city} ,{userProfile.address.country}.
          </Typography>
          <Typography variant="body1">
          <b> Phone:</b>{userProfile.phone}
          </Typography>
          <Typography variant="body1">
          <b>administrator:</b> {userProfile.isAdmin ? <Check className="icon" /> : <Close className="icon" />}
 
          </Typography>
          <Typography variant="body1">
          <b> business:</b>     {userProfile.isBusiness ? <Check className="icon" /> : <Close className="icon" />}   
                </Typography>
           </CardContent>
      </Card>
      <div className="mapSectionStyle">
        <Map
          center={[51.505, -0.09]}
          zoom={13}
          address={`${userProfile.address.street} ${userProfile.address.city}`}
        />
      </div>
       </div>
       </Paper>
    </div>

    </Container>    
  );
};
