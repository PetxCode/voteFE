import React from "react";
import ChartRace from "react-chart-race";

const RaceChart = () => {
  return (
    <div>
      Race now...!
      <ChartRace
        data={[
          { id: 0, title: "Ayfonkarahisar", value: 42, color: "#50c4fe" },
          { id: 1, title: "Kayseri", value: 38, color: "#3fc42d" },
          { id: 2, title: "Muğla", value: 76, color: "#c33178" },
          { id: 3, title: "Uşak", value: 30, color: "#423bce" },
          { id: 4, title: "Sivas", value: 58, color: "#c8303b" },
          { id: 5, title: "Konya", value: 16, color: "#2c2c2c" },
        ]}
      />
    </div>
  );
};

export default RaceChart;
