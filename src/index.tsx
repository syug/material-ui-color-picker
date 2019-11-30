import * as React from "react";
import { render } from "react-dom";
import ColorPicker from "material-ui-color-picker";

function App() {
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
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
