import React, { useState } from "react";
import Card from "../components/Card";
import Slide from "../components/Slide";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import axios from "axios";
import "../index.css";
import { useEffect } from "react";
const Sort = () => {
  const [range, setrange] = useState([0, 1200]);
  const [loading, setloading] = useState(false);
  const [value, setValueOf] = useState("-price");
  const [bootcamps, setbootcamps] = useState([]);
  let filter;
  const filterboot = (data) => {
    // console.log(data.data);
    const filterbootcamp = data.filter(
      (val) => val.price > range[0] && val.price < range[1]
    );

    setbootcamps(filterbootcamp);
  };
  const fetchdata = async () => {
    setloading(true);
    await axios
      .get(
        `/api/v1/bootcamps/?price[gt]=${range[0]}&&price[lte]=${range[1]}&&sort=${value}`
      )
      .then((res) => {
        console.log(res);

        filterboot(res.data.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  };
  useEffect(() => {
    fetchdata();
  }, [value]);
  return (
    <div className="main_body">
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h4">Bootcamps</Typography>
        </Toolbar>
      </AppBar>
      <Slide
        setrange={setrange}
        range={range}
        fetchdata={fetchdata}
        setvalue={setValueOf}
        value={value}
      />
      {loading ? <h2>Loading....</h2> : <Card bootcamps={bootcamps} />}
    </div>
  );
};

export default Sort;
