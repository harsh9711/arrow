import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      options: {
        chart: {
          height: '100%', // Set height to 100% to adapt to the parent container
          width: '100%',  // Set width to 100% to adapt to the parent container
          type: 'line',
          zoom: {
            enabled: false
          },
          background: '#000', // Set the background color to black
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f7f7f7', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    };
  }

  render() {
    return (
      <div id="chart" style={{ width: '50%', height: '50%' }}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" />
      </div>
    );
  }
}

export default ApexChart;
