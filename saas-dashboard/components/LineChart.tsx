import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface LineChartProps {
  data?: ChartData<"line", number[], string>;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const defaultData = {
    labels: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ],
    datasets: [
      {
        label: "Your daily goals",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "black",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "black",
        },
      },
      title: {
        color: "black",
      },
      tooltip: {
        titleColor: "black",
        bodyColor: "black",
      },
    },
  };

  return <Line data={data || defaultData} options={options} />;
};

export default LineChart;

