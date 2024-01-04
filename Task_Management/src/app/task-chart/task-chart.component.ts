import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";
import { TaskServiceService } from '../service/task-service.service';
import { LandingComponent } from '../landing/landing.component';

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  grid: ApexGrid | any;
  colors: string[] | any;
  legend: ApexLegend | any;
};


@Component({
  selector: 'app-task-chart',
  templateUrl: './task-chart.component.html',
  styleUrls: ['./task-chart.component.scss']
})
export class TaskChartComponent {
  total: number = 7;
  completed: number = 4;
  working: number = 2;
  pending: number = 1;


  @ViewChild("chart") chart!: LandingComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor(private service: TaskServiceService) {
    this.loadChart(null)
  }

  ngOnInit() {
    this.fetchBoxData()
  }

  fetchBoxData() {
    this.service.taskCart.subscribe((res: any) => {
      res.map((elem: any) => {
        this.total++
        switch (elem.status) {
          case 'Pending':
            this.pending++
            break;
          case 'Completed':
            this.completed++
            break
          case 'Working':
            this.working++
        }
      })

      this.loadChart([this.total, this.pending, this.working, this.completed])
    })
  }

  loadChart(data: any) {
    this.chartOptions = {
      series: [
        {
          name: "distibuted",
          data: data ? data : [21, 22, 10, 28]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart: any, w: any, e: any) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#36b9cc",
        "#f6c23e",
        "#4e73df",
        "#1cc88a"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          "Total",
          "Pending",
          "Working",
          "Completed",
        ],
        labels: {
          style: {
            colors: [
              "black",
              "black",
              "black",
              "black"
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }
}