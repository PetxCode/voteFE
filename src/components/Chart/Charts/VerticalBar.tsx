import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,

  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "President",
    },
  },
};

const labels = ["Race for office of the President"];

export const data = {
  labels,
  datasets: [
    {
      label: "Isaac Success",
      data: [366, 337, 266, 428, 222, 265, 300],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Isaac Moses",
      data: [244, 110, 288, 378, 100, 298, 522],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const VerticalBar = () => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default VerticalBar;
