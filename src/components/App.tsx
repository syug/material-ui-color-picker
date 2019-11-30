import * as React from "react";
import ColorPicker from "material-ui-color-picker";
import ColorChip from "./ColorChip";

const App = () => {
  return (
    <div className="App">
      <ColorChip color={[0, 0, 0]} />
      <ColorPicker
        name="color"
        defaultValue="#000"
        // value={this.state.color} - for controlled component
        onChange={color => console.log(color)}
      />
    </div>
  );
};

export default App;
