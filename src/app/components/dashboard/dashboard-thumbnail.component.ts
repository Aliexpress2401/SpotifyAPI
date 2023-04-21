import { Component, Input } from '@angular/core'

@Component({
  selector: 'dashboard-thumbnail',
  template: `
    <div *ngIf="dashboard.type=='links'" class="well howerwell thumbnail">
    <h2>{{dashboard?.title}}</h2>
    <div>{{dashboard?.description}}</div>
    </div>

    <div *ngIf="dashboard.type=='greenlinks'" class="well howerwell thumbnail thumbnail-green">
    <h2>{{dashboard?.title}}</h2>
    <div>{{dashboard?.description}}</div>
    </div>

    <div *ngIf="dashboard.type=='number'" class="well howerwell thumbnail thumbnail-number">
    <h1 class="title">{{dashboard?.title}}</h1>
    <div>{{dashboard?.description}}</div>
    </div>

    <div *ngIf="dashboard.type=='image'" class="well howerwell thumbnail thumbnail-image">
    <h1 class="title">{{dashboard?.title}}</h1>
    <div>{{dashboard?.description}}</div>
    </div>
  `,
  styleUrls: ['dashboard-thumbnail.component.scss']
})
export class DashboardThumbnailComponent {
  @Input() dashboard: any
  
}
