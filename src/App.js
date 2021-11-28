import React from "react";
import Card from "./Cards";
import './index.css'
import Sdata from './Sdata';

function ncard(val) {
  return (

    <Card
      key = {val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

const App = () =>(
  <>
    <h1 className="heading_style"> LIST OF TOP NETFLIX SERIES </h1>,
    {Sdata.map(ncard)}
  </>
);

export default App
