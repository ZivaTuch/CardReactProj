import { Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import Error from "../../components/Error";
import { useTheme } from "@emotion/react";
import Map from "../../forms/map/Map";
import "../../styles/styles.css"
export default function CardDetailsPage() {
  const { id } = useParams();
  const { handleGetCard, value } = useCards();
   const { card, error } = value;

  useEffect(() => {
    handleGetCard(id);
  }, []);
  const { isDark } = useTheme();

  if (error) return <Error errorMessage={error.toString()} />

  
  if (card && card.length != 0) {
    return (
         <Container  sx={{ color: isDark ? "white" : "inherit" }}    >
         <PageHeader
          title="Card details"
          subtitle="Here you can find all the dateils about specific card"
        />
        <div className="root">

      <Paper className="paper">
        <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item>  
              <img src={"/"+card.image.url} alt={card.image.alt}className="smallImage"/>     
               </Grid>   
          <Grid item>
          <Typography variant="h5" component="h1">
           <b>{card.title}</b>
            </Typography>
            <Typography variant="h6" component="h1">
           <b> {card.subtitle}</b>
            </Typography>
            <Typography variant="body1">{card.email}</Typography>
            <Typography variant="body1">{card.phone}</Typography>
              </Grid>
       </Grid>
   
        <div className="mapPageStyle">
      <Card > 
        <CardContent>
          <Typography variant="body1">
          <b>description:</b> {card.description}
          </Typography>
          <Typography variant="body1">
            <b>Number:</b>   {card.bizNumber}
          </Typography>
          <Typography variant="body1">
           <b> Email:</b>{card.email}
          </Typography>
          <Typography variant="body1">
            <b>Address:</b> {card.address.street}  {card.address.houseNumber}. {card.address.city} ,{card.address.country}.
          </Typography>
          <Typography variant="body1">
            <b>Phone:</b>{card.phone}
                  </Typography>   
         </CardContent>
      </Card>
      <div className="mapSectionStyle">
        <Map
          center={[51.505, -0.09]}
          zoom={13}
          address={`${card.address.street} ${card.address.city}`}
        />
      </div>
            </div>
            </Paper>
      </div>

   </Container>
    );
  }
}
