import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
function CardComponentofCustomers(props) {
  return (
    <>
      <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          m={1}
          height="200px"
          bgcolor="background.paper"
          boxShadow={3}
        >
          <img src={props.image} width="70px" alt="Thumbnail"></img>
          <Typography variant="h6">{props.name}</Typography>
          <Button>
              View Profile
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default CardComponentofCustomers;
