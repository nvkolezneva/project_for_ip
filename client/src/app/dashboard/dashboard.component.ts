import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    let myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [
            5,
            1,
          ],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          label: 'Заказы'
        }],
        labels: [
          'Колезнева Надежда',
          'Иванов Иван'
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Заказы'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }

}
