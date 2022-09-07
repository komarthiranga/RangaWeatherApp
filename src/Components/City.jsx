import {
  FormGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { cities } from "../data/city";

const City = ({isLoading, forecastData, cityName}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showWeatherHandler = (event, newValue) => {
    isLoading(true);
    fetchWeatherForcast(newValue);
  };

  const fetchWeatherForcast = async(selectedCity) => {
    try{
        const forcastResponseData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity.label}&APPID=d37deb3cd8797e9402bfeeb15ddc404a`);
        if(!forcastResponseData.ok) {
            throw new Error('There is some issue while fetching the data');
        }
        const forcastResponse = await forcastResponseData.json();

        const currentWeatherResponseData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.label}&APPID=d37deb3cd8797e9402bfeeb15ddc404a`);
        if(!currentWeatherResponseData.ok) {
            throw new Error('There is some issue while fetching the data');
        }
        const currentWeatherResponse = await currentWeatherResponseData.json();

        isLoading(false);
        forecastData(forcastResponse.list, currentWeatherResponse, selectedCity.label);
    } catch{
        console.log('There is some issue with fetching Data')
    }
  }

  return (
    <>
      <h1>Weather App</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cities}
            sx={{ color: "white" }}
            onChange={showWeatherHandler}
            renderInput={(params) => (
              <TextField {...params} label="Select City" />
            )}
          />
        </FormGroup>
      </form>
    </>
  );
};

export default City;
