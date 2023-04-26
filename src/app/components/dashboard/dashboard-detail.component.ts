import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DashboardService } from "./dashboard.service";


@Component({
  templateUrl: 'dashboard-detail.component.html',
  styles: [`
    .container {padding-left: 20px; padding-right: 20px; }
    .event-image {height: 100px; }
  `]
})
export class DashboardDetailsComponent {
  dashboard:any
  constructor(private dashboardService: DashboardService, private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.dashboard = this.dashboardService.getEvent(+this.route.snapshot.params['id'])
  }
}
