import { Component, Input } from '@angular/core'
import { IDashboard } from '../../models/dashboard.interface'

@Component({
  selector: 'dashboard-thumbnail',
  template: `
   <div *ngIf="dashboard.type=='links'" class="well howerwell thumbnail">
  <h2>{{dashboard.title}}</h2>
  <div>{{dashboard.description}}</div>
</div>

<div *ngIf="dashboard.type=='greenlinks'" class="well howerwell thumbnail thumbnail-green">
  <h2>{{dashboard.title}}</h2>
  <div>{{dashboard.description}}</div>
</div>

<div *ngIf="dashboard.type=='number'" class="well howerwell thumbnail thumbnail-number">
  <h1 class="title">{{dashboard.title}}</h1>
  <div>{{dashboard.description}}</div>
</div>

<a [href]="dashboard.route" *ngIf="dashboard.type=='image'" class="well howerwell thumbnail thumbnail-image" [ngStyle]="{'background-image':'url(' + dashboard.imageUrl + ')'}">
  <h1 class="title">{{dashboard.title}}</h1>
  <div>{{dashboard.description}}</div>
</a>
  `,
  styleUrls: ['dashboard-thumbnail.component.scss']
})
export class DashboardThumbnailComponent {
  @Input() dashboard: IDashboard = {} as IDashboard;

}
