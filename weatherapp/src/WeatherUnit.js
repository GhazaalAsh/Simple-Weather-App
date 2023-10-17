import React, { useState } from "react";

export default function WeatherUnit(props) {
  return (
    <span className="WeatherUnit">
      <span className="tempNumb">{Math.round(props.celsius)}</span>
      <span className="unit">
        <a href="./">°C</a>
        <span className="colorChange">|</span>
        <a href="./">°F</a>
      </span>
    </span>
  );
}
