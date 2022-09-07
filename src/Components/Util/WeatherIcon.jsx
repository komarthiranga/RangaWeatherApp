import React from "react";

import {
  WiDaySunny,
  WiCloud,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiCloudy,
  WiDayRainMix,
  WiNightRainMix,
  WiRainMix,
  WiThunderstorm,
  WiSnow,
  WiFog
} from "weather-icons-react";

const weatherIcons = new Map([
  [
    "01d",
    (size, color) => {
      return <WiDaySunny size={size} color={color} />;
    }
  ],
  [
    "01n",
    (size, color) => {
      return <WiNightClear size={size} color={color} />;
    }
  ],
  [
    "02d",
    (size, color) => {
      return <WiDayCloudy size={size} color={color} />;
    }
  ],
  [
    "02n",
    (size, color) => {
      return <WiNightCloudy size={size} color={color} />;
    }
  ],
  [
    "03d",
    (size, color) => {
      return <WiCloud size={size} color={color} />;
    }
  ],
  [
    "03n",
    (size, color) => {
      return <WiCloud size={size} color={color} />;
    }
  ],
  [
    "04d",
    (size, color) => {
      return <WiCloudy size={size} color={color} />;
    }
  ],
  [
    "04n",
    (size, color) => {
      return <WiCloudy size={size} color={color} />;
    }
  ],
  [
    "09d",
    (size, color) => {
      return <WiRainMix size={size} color={color} />;
    }
  ],
  [
    "09n",
    (size, color) => {
      return <WiRainMix size={size} color={color} />;
    }
  ],
  [
    "10d",
    (size, color) => {
      return <WiDayRainMix size={size} color={color} />;
    }
  ],
  [
    "10n",
    (size, color) => {
      return <WiNightRainMix size={size} color={color} />;
    }
  ],
  [
    "11d",
    (size, color) => {
      return <WiThunderstorm size={size} color={color} />;
    }
  ],
  [
    "11n",
    (size, color) => {
      return <WiThunderstorm size={size} color={color} />;
    }
  ],
  [
    "13d",
    (size, color) => {
      return <WiSnow size={size} color={color} />;
    }
  ],
  [
    "13n",
    (size, color) => {
      return <WiSnow size={size} color={color} />;
    }
  ],
  [
    "50d",
    (size, color) => {
      return <WiFog size={size} color={color} />;
    }
  ],
  [
    "50n",
    (size, color) => {
      return <WiFog size={size} color={color} />;
    }
  ]
]);

export const WeatherIcon = ({ id, size, color }) => {
  return weatherIcons.get(id)(size, color);
};
