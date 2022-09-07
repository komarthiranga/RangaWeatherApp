import React from "react";
import { WeatherIcon } from "./Util/WeatherIcon";
import styled from "@emotion/styled";

const Title = styled("div")`
  color: gray;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Temperature = styled("div")`
  color: hotpink;
`;

export const ButtonWeatherInfo = ({ when, weatherDetails }) => {
  const icon = weatherDetails.weather[0].icon;
  const temp = Number(weatherDetails.main.temp - 273.15).toFixed(2);

  return (
    <>
      <Title>{when}</Title>
      <div>
        <WeatherIcon id={icon} size={24} color="#000" />
        <Temperature>{Math.round(temp)} °C</Temperature>
      </div>
    </>
  );
};
