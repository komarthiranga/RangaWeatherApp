import React from "react";
import styled from "@emotion/styled";

// todo this does not really need to be a button as these buttons are wrapped in react router links
const StyledButton = styled("button")`
  width: 120px;
  height: 120px;
  border: 1px solid ${props => (props.selected ? "hotpink" : "lightgrey")};
  border-radius: 0.3rem;
  margin: 5px;
  background: white;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 1px solid hotpink;
    outline: none;
  }
`;
export const MenuButton = props => {
  return <StyledButton>{props.children}</StyledButton>;
};
