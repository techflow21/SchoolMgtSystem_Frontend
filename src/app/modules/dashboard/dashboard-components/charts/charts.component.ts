import { AfterViewInit, Component, OnInit } from '@angular/core';
// import Chart from "chart.js";
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit, AfterViewInit {
  //public chart: any;
  constructor() {}

  ngOnInit(): void{
    //this.createChart();
  }

  ngAfterViewInit() {
    let config: any = {
      type: 'bar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#ed64a6',
            borderColor: '#ed64a6',
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: 'rgba(0,0,0,.4)',
          },
          align: 'end',
          position: 'bottom',
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.2)',
                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx: any = document.getElementById('bar-chart');
    ctx = ctx.getContext('2d');
    new Chart(ctx, config);
  }

  // Another Chart Style
  // createChart() {
  //   this.chart = new Chart('MyChart', {
  //     type: 'line', //this denotes tha type of chart

  //     data: {
  //       // values on X-Axis
  //       labels: [
  //         '2022-05-10',
  //         '2022-05-11',
  //         '2022-05-12',
  //         '2022-05-13',
  //         '2022-05-14',
  //         '2022-05-15',
  //         '2022-05-16',
  //         '2022-05-17',
  //       ],
  //       datasets: [
  //         {
  //           label: 'Sales',
  //           data: ['467', '576', '572', '79', '92', '574', '573', '576'],
  //           backgroundColor: 'blue',
  //         },
  //         {
  //           label: 'Profit',
  //           data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
  //           backgroundColor: 'limegreen',
  //         },
  //       ],
  //     },
  //     options: {
  //       aspectRatio: 2.5,
  //     },
  //   });
  // }
}
