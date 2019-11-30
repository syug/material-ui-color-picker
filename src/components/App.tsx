import * as React from "react";
import ColorPicker from "material-ui-color-picker";

const App = () => {
  return (
    <div className="App">
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
