import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
          bgcolor="black"
          boxShadow={20}
        >
          <img src={props.image} width="70px" alt="Thumbnail"></img>
          <Typography className="text-define" variant="h6">
            Item Name : {props.name}
          </Typography>
          <Typography className="text-define" variant="body2">
            Desc: {props.desc}
          </Typography>
          <Typography className="text-define" variant="body2">
            Total Price : {props.amount}
          </Typography>
          <Typography className="text-define" variant="body2">
            Total Available :{props.Quantity}
          </Typography>
          <EditIcon
            className="edit-icon"
            onClick={() => {
              console.log("delete");
            }}
          />
          <DeleteIcon
            className="delete-icon"
            onClick={() => {
              console.log("delete");
            }}
          />
        </Box>
      </Grid>
    </>
  );
}

export default CardComponentofItems;
