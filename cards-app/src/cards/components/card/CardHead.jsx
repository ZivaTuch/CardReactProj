import React from "react";
import { CardMedia } from "@mui/material";
import imgType from "../../models/types/imgType";

export default function CardHead({ image }) {
    return (
        <>
            <CardMedia
                component="img"
                height="140"
                image={image.url}
                alt={image.url}
            />
        </>
    );
};

CardHead.propTypes = {
    image: imgType,
  };
  