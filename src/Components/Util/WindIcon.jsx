import React from "react";
import styled from "@emotion/styled";
import { WiWindDeg } from "weather-icons-react";

const RotatedWiWindDeg = styled(WiWindDeg)`
  transform: rotate(${props => props.rotate});
`;

export const WindIcon = ({ deg, size, color }) => {
  return <RotatedWiWindDeg rotate={`${deg}deg`} size={size} color={color} />;
};
