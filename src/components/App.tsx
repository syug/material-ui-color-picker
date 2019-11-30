import * as React from "react";
import ColorPicker from "material-ui-color-picker";
import ColorChip from "./ColorChip";

const App = () => {
  const [color, setColor] = React.useState("#000");
  const handleOnChange = React.useCallback(color => {
    console.log(color);
    setColor(color);
  }, []);

  return (
    <div className="App">
      <ColorChip color={color}>Chip</ColorChip>
      <ColorPicker
        name="color"
        defaultValue="#000"
        // value={this.state.color} - for controlled component
        onChange={handleOnChange}
      />
    </div>
  );
};

export default App;
