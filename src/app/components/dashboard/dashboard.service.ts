import { Injectable } from "@angular/core"
import { IDashboard } from "../../models/dashboard.interface"

@Injectable()
export class DashboardService {
  getEvents() {
    return DASHBOARDS
  }

  getEvent(id: number) {
    return DASHBOARDS.find(event => event.id === id)
  }
}

const DASHBOARDS: IDashboard[] = [
  {
    id: 1,
    type: 'links',
    title: 'Albums',
    route: 'albums',
    description: 'Look Your Saved Albums'
  },
  {
    id: 2,
    type: 'number',
    title: '25',
    description: 'New Artists This Month'
  },
  {
    id: 3,
    type: 'image',
    title: 'Top Hits',
    description: 'Italy 2023'
  },
  {
    id: 4,
    type: 'number',
    title: '100',
    description: 'New Release Every Week'
  },
  {
    id: 5,
    type: 'greenlinks',
    title: 'Playlists',
    route: 'playlists',
    description: 'Look Your Saved Playlists'
  },
  {
    id: 6,
    type: 'image',
    title: 'New Music',
    description: 'Friday'
  },
  {
    id: 7,
    type: 'number',
    title: '3',
    description: 'New Genres Heard'
  },
  {
    id: 8,
    type: 'links',
    title: 'Your Podcast',
    route: 'podcasts',
    description: 'Look Your Saved Podcasts'
  },
  {
    id: 9,
    type: 'links',
    title: 'Your New',
    route: 'tracks',
    description: 'Saved Tracks'
  },
  {
    id: 10,
    type: 'number',
    title: '5',
    description: 'Raccomended Song Based On Your Top 5 Tracks'         
  },
  {
    id: 11,
    type: 'links',
    title: 'Get Your Top 5 Tracks ',
    description: 'From The Last 30 Days'
  },
  {
    id: 12,
    type: 'greenlinks',
    title: 'Get Your',
    route: 'you',
    description: 'User Profile'
  }
]
