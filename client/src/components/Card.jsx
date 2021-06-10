import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";

import "../index.css";
const CardM = ({ bootcamps }) => {
  // console.log(bootcamps);
  return (
    <div className="card_body">
      {bootcamps.map((val) => {
        return (
          <>
            <Paper className="paper" square>
              <div className="title_ca">
                <Avatar></Avatar>
                <Typography variant="h4" className="card_heading">
                  {val.name}
                </Typography>
              </div>
              <Typography variant="subtitle1">{val.description}</Typography>
              <Typography variant="h5">${val.price}</Typography>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                  name="read-only"
                  value={val.rating}
                  precision={0.5}
                  readOnly
                />
              </Box>
            </Paper>
          </>
        );
      })}
    </div>
  );
};

export default CardM;
