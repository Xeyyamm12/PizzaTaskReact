import { useState } from "react";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import "../Pizza/Pizza.css";

const Pizza = () => {
  const [state, setState] = useState([]);

  return (
    <>
      <Navbar data={state} />
      <div className="container">
        <Cards setState={setState} />
      </div>
    </>
  );
};

export default Pizza;