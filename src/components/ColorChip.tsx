import React, { FC } from "react";
import { styled } from "@material-ui/core";

type Color = [number, number, number];
interface ColorChipProps {
  color: Color;
}

const getStyle = (color: Color) => ({
  backgroundColor: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1);`
});

const StyledDiv = styled("div")(({ theme }) => ({
  backgroundColor: "#F00"
}));

const ColorChip: FC<ColorChipProps> = ({ color, children, ...props }) => (
  <StyledDiv>
    <p style={getStyle(color)}>{JSON.stringify(color)}</p>
    {children ? children : null}
  </StyledDiv>
);

export default ColorChip;
