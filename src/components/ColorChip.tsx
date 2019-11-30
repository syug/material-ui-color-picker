import * as React from "react";
import { styled } from "@material-ui/core";

type ColorRGBA = [number, number, number, number];

interface ColorChipProps {
  color?: string;
  rgba?: ColorRGBA;
}

const getRGBA = (rgba: ColorRGBA) => ({
  backgroundColor: `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`
});

const StyledDiv = styled("div")(({ theme, ...props }) => {
  const rgba = props["data-rgba"];
  const color = props["data-color"];

  let col;
  if (rgba) {
    col = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
  }
  if (color) {
    col = `${props["data-color"]}`;
  }

  return {
    backgroundColor: col
  };
});

const ColorChip: React.FC<ColorChipProps> = ({
  color,
  rgba = [255, 0, 0, 1],
  children,
  ...props
}) => (
  <div>
    <StyledDiv data-color={color} data-rgba={rgba}>
      {JSON.stringify(color)}
    </StyledDiv>
    <p style={getRGBA(rgba)}>{JSON.stringify(rgba)}</p>
  </div>
);

export default ColorChip;
