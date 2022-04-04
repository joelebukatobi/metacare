import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Graph from 'components/Graph';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const state = {
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        offset: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: 'black',
        },
      },

      y: {
        min: 10,
        max: 50,
        ticks: {
          stepSize: 10,
        },
      },
    },
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
  },
  data: [
    {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: ['Average Response Time', 'Average Response Time'],
          data: [15, 30, 15, 20, 30, 15, 40, 25],
          borderWidth: 1.8,
          borderColor: 'rgba(240, 93, 35, 1)',
          backgroundColor: 'rgba(240, 93, 35, 0.5)',
          pointBackgroundColor: 'rgba(255,255,255, 1)',
          pointRadius: 8,
        },
      ],
    },
    {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: ['Replies per solution', 'Average Replies'],
          data: [25, 15, 30, 20, 30, 40, 10, 25],
          borderWidth: 1.8,
          borderColor: 'rgba(62, 104, 255, 1)',
          backgroundColor: 'rgba(62, 104, 255, .5)',
          pointBackgroundColor: 'rgba(255,255,255, 1)',
          pointRadius: 8,
        },
      ],
    },
    {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: ['Average resolution time', 'Average Resolution Time'],
          data: [15, 30, 15, 20, 30, 15, 40, 25],
          borderWidth: 1.8,
          borderColor: 'rgba(251, 100, 145, 1)',
          backgroundColor: 'rgba(251, 100, 145, .5)',
          pointBackgroundColor: 'rgba(255,255,255, 1)',
          pointRadius: 8,
        },
      ],
    },
    {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: ['First contact resolution rate', 'Average Contact Rate'],
          data: [15, 30, 15, 20, 30, 15, 40, 25],
          borderWidth: 1.8,
          borderColor: 'rgba(7, 201, 226, 1)',
          backgroundColor: 'rgba(7, 201, 226, .5)',
          pointBackgroundColor: 'rgba(255,255,255, 1)',
          pointRadius: 8,
        },
      ],
    },
  ],
};

export default function Body() {
  return (
    <div className="dashboard__container__body">
      <div className="dashboard__container__body__row">
        {state.data.map((data, i) => {
          return (
            <Graph
              key={i}
              options={state.options}
              data={data}
              heading={data.datasets[0].label[0]}
              style={{ backgroundColor: data.datasets[0].borderColor }}
              label={data.datasets[0].label[1]}
            />
          );
        })}
      </div>
    </div>
  );
}
