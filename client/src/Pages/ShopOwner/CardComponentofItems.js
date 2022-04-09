import React from "react";
import { Grid, Box, Typography } from "@mui/material";
function CardComponentofItems(props) {
  return (
    <>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          m={1}
          height="300px"
          bgcolor="background.paper"
          boxShadow={3}
        >
          <img
            src={props.image}
            width="100px"
            alt="Thumbnail"
          ></img>
          <Typography variant="h6">{props.name}</Typography>
          <Typography variant="body2">{props.desc}</Typography>
          <Typography variant="body2">{props.amount}</Typography>
        </Box>
      </Grid>
    </>
  );
}

export default CardComponentofItems;
