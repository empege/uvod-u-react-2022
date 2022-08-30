import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import Listing from "./tutorial/6. ImportIExport/Listing";
import UseStateBasics from "./tutorial/7. UseStateBasics/UseStateBasics";
import UseStateBasics2 from "./tutorial/7. UseStateBasics/UseStateBasics2";
import Counter from "./tutorial/8. UseStateZadaci/Counter";
import UseEffectBasics from "./tutorial/10. useEffectBasics/UseEffectBasics";
import UseEffectBasiscs2 from "./tutorial/10. useEffectBasics/UseEffectBasiscs2";
import Listing from "./my blog/components/Listing/Listing";
import ControlledInputs from "./tutorial/11. ControlledInputs/ControlledInputs";
import ControlledInputsZadatak1 from "./tutorial/11. ControlledInputs/ControlledInputsZadatak";

function App() {
  return <Listing />
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
