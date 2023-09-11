import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Dynamic = () => {
  const [data, setData] = useState({
    labels: [], // Array of labels for the x-axis
    datasets: [
      {
        label: 'Dynamic Data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        // ... other dataset properties
        data: [], // Array of data points for the y-axis
      },
    ],
  });

  // Function to add new data
  const addData = () => {
    const newData = {
      x: new Date().toLocaleTimeString(),
      y: Math.random() * 100, // Random data for the example
    };

    setData((prevState) => ({
      ...prevState,
      labels: [...prevState.labels, newData.x],
      datasets: [
        {
          ...prevState.datasets[0],
          data: [...prevState.datasets[0].data, newData.y],
        },
      ],
    }));
  };

  useEffect(() => {
    const interval = setInterval(addData, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const chartOptions = {
    scales: {
      x: {
        type: 'category', // Use category scale for x-axis
      },
      y: {
        beginAtZero: true, // Adjust as needed
      },
    },
  };

  return (
    <div>
      <h2>Dynamic Line Chart</h2>
      <Line data={data} options={chartOptions} />
    </div>
  );
};

export default Dynamic;
