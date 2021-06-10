import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { TextField, Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {},
  slide: {
    margin: "5px 10px  0px 0px",
    // border: "3px solid red",
    width: "88%",
  },
  control: {
    margin: theme.spacing(1),
  },
  textf: {
    marginBottom: "15px",
  },
  heading: {
    alignSelf: "flex-start",
    paddingLeft: "10px",
    paddingTop: "5px",
  },
  heading2: {
    alignSelf: "flex-start",
    paddingLeft: "25px",
  },
  bod: {
    width: "80%",
    margin: "15px auto",
  },
  sort: {
    // border: "3px solid red",
    marginLeft: "40px",
  },
  border1: {
    border: "2px solid red",
  },
  border2: {
    border: "3px solid green",
  },
}));
const Slide = ({ range, setrange, fetchdata, setvalue, value }) => {
  const handleChange = (event) => {
    setvalue(event.target.value);
    // console.log(event.target.value);
  };

  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.bod} square>
        {/* <h2>This is a slider components</h2> */}
        {/* <input type="range" name="raneg" min={0} max={2000} value={range} /> */}
        <Grid container className={classes.root}>
          <Grid
            item
            xs={12}
            sm={7}
            direction="column"
            justify="flex-start"
            container
            alignItems="center"
          >
            <Typography variant="h6" className={classes.heading}>
              Filters
            </Typography>

            <Slider
              min={0}
              max={4000}
              className={classes.slide}
              valueLabelDisplay="auto"
              onChange={(e, newvalue) => {
                setrange(newvalue);
                // console.log(newvalue);
              }}
              onChangeCommitted={() => {
                fetchdata();
              }}
              value={range}
            />

            <Grid
              item
              container
              className={classes.textf}
              direction="row"
              justify="center"
            >
              <TextField
                size="small"
                className={classes.control}
                variant="outlined"
                type="number"
                value={range[0]}
                name="min"
                inputProps={{ readonly: "true" }}
                label="MIN"
                onChange={(e) => {
                  if (Number(e.target.value) < range[1]) {
                    setrange([Number(e.target.value), range[1]]);
                  }
                }}
                diabled
              />
              <TextField
                size="small"
                variant="outlined"
                type="number"
                className={classes.control}
                name="max"
                value={range[1]}
                inputProps={{ readonly: "true" }}
                label="MAX"
                onChange={(e) => {
                  setrange([range[0], Number(e.target.value)]);
                }}
              />
            </Grid>
          </Grid>

          <Grid
            item
            sm={4}
            direction="column"
            container
            justify="center"
            alignItems="flex-start"
          >
            <FormControl component="fieldset">
              {/* <FormLabel component="legend">Sort By</FormLabel> */}
              <Typography variant="h6" className={classes.heading2}>
                Sort By
              </Typography>
              <RadioGroup
                className={classes.sort}
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="-price"
                  control={<Radio />}
                  label="Price: Highest-Lowest"
                />
                <FormControlLabel
                  value="lowest to max"
                  control={<Radio />}
                  label="Price: Lowest-Highest"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Slide;
// // / *
//  <Paper>
//         {/* <h2>This is a slider components</h2> */}
//         {/* <input type="range" name="raneg" min={0} max={2000} value={range} /> */}
//         <Grid
//           container
//           className={classes.root}
//           alignitems="center"
//           justify="center"
//         >
//           <Grid item container sm={6} alignitems="center" justify="center">
//             <Grid
//               item
//               xs={12}
//               alignItems="center"
//               justify="center"
//               className={classes.border1}
//             >
//               <Slider
//                 min={0}
//                 max={2000}
//                 className={classes.border2}
//                 valueLabelDisplay="auto"
//                 onChange={(e, newvalue) => {
//                   setrange(newvalue);
//                   // console.log(newvalue);
//                 }}
//                 onChangeCommitted={() => {
//                   fetchdata();
//                 }}
//                 value={range}
//               />
//             </Grid>

//             <Grid container justify="center" className={classes.border2}>
//               <TextField
//                 variant="outlined"
//                 type="number"
//                 value={range[0]}
//                 name="min"
//                 inputProps={{ readonly: "true" }}
//                 label="MIN"
//                 onChange={(e) => {
//                   if (Number(e.target.value) < range[1]) {
//                     setrange([Number(e.target.value), range[1]]);
//                   }
//                 }}
//                 diabled
//               />
//               <TextField
//                 variant="outlined"
//                 type="number"
//                 name="max"
//                 value={range[1]}
//                 inputProps={{ readonly: "true" }}
//                 label="MAX"
//                 onChange={(e) => {
//                   setrange([range[0], Number(e.target.value)]);
//                 }}
//               />
//             </Grid>
//           </Grid>
//           <Grid item sm={6}>
//             <Grid
//               container
//               justify="center"
//               alignItems="flex-start"
//               className={classes.border2}
//             >
//               <FormControl component="fieldset">
//                 <FormLabel component="legend">Filter</FormLabel>
//                 <RadioGroup
//                   aria-label="gender"
//                   name="gender1"
//                   value={value}
//                   onChange={handleChange}
//                 >
//                   <FormControlLabel
//                     value="-price"
//                     control={<Radio />}
//                     label="max-to-lowest"
//                   />
//                   <FormControlLabel
//                     value="lowest to max"
//                     control={<Radio />}
//                     label="lowest to max"
//                   />
//                 </RadioGroup>
//               </FormControl>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>

// */
