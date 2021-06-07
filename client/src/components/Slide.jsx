import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { TextField } from "@material-ui/core";
const Slide = ({ range, setrange, fetchdata, setvalue, value }) => {
  const handleChange = (event) => {
    setvalue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <h2>This is a slider components</h2>
      {/* <input type="range" name="raneg" min={0} max={2000} value={range} /> */}
      <Slider
        min={0}
        max={2000}
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
      <input
        type="number"
        value={range[0]}
        name="min"
        onChange={(e) => {
          if (Number(e.target.value) < range[1]) {
            setrange([Number(e.target.value), range[1]]);
          }
        }}
        diabled
      />
      <TextField
        type="number"
        name="min"
        value={range[1]}
        disabled
        onChange={(e) => {
          console.log("hhs");
          setrange([range[0], Number(e.target.value)]);
        }}
      />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="-price"
            control={<Radio />}
            label="max-to-lowest"
          />
          <FormControlLabel
            value="lowest to max"
            control={<Radio />}
            label="lowest to max"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Slide;
