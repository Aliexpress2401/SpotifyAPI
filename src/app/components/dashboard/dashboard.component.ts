import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit{
  dashboards: any

  constructor(private dashboardService: DashboardService, private router: Router) {
    
  }

  ngOnInit() {
    this.dashboards = this.dashboardService.getEvents()
  }

  //PAGINA CON LE INFO DOPO LA DASHBOARD

  public thumbnailClick(id: number, route?: string): void {
    this.router.navigate(['dashboard', id, route ])
  }
}
