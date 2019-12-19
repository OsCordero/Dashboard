import React from 'react';
import ReactApexChart from 'react-apexcharts';
class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '50px',
      options: {
        grid: {
          padding: {
            top: 10,
          },
        },
        stroke: { width: 1 },

        labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
        fill: {
          opacity: 0,
        },
        markers: {
          size: 4,
        },
        legend: {
          show: false,
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        colors: ['#008FFB', '#FEB019', '#00E396'],
      },

      series: [
        {
          name: 'Series 1',
          data: [120, 100, 50, 60, 90],
        },
        {
          name: 'Series 2',
          data: [40, 110, 75, 40, 15],
        },
        {
          name: 'Series 3',
          data: [50, 20, 75, 60, 90],
        },
      ],
    };
  }

  render() {
    return (
      <div className='chart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='radar'
          height='300px'
          min-height='150px'
          style={{ minHeight: '150px' }}
        />
      </div>
    );
  }
}

export default Chart;
