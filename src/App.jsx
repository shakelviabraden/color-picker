import { useState } from "react";


const Color = (props) => {
  return <div className={props.color} onClick={() => {
    props.setSelectedColor(props.color)
  }}></div>
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState(" ")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
      <Color color="violet" setSelectedColor={setSelectedColor}/>
      <Color color="black" setSelectedColor={setSelectedColor}/>
      <Color color="blue" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
