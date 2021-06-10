import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const card = ({ bootcamps }) => {
  // console.log(bootcamps);
  return (
    <div>
      <h2>This is a card componet</h2>
      {bootcamps.map((val) => {
        return (
          <>
            <h2>{val.price}</h2>
            {val.rating}
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Read only</Typography>
              <Rating
                name="read-only"
                value={val.rating}
                precision={0.5}
                readOnly
              />
            </Box>
          </>
        );
      })}
    </div>
  );
};

export default card;
