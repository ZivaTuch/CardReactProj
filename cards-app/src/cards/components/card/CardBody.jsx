import React from "react";
import { CardHeader, Divider, CardContent, Typography } from "@mui/material";
import { number, string } from "prop-types";
import addressType from "../../models/types/addressType";

export default function CardBody({ title, subtitle, phone, address, cardNumber }) {
  return (
    <>
      <CardHeader title={title} subheader={subtitle} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Phone: </strong>{phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address: </strong>{address.city} {address.street} {address.houseNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number: </strong>{cardNumber}
        </Typography>
      </CardContent>
    </>
  );
};

CardBody.propTypes = {
  address: addressType.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  phone: string.isRequired,
  cardNumber: number,
};
