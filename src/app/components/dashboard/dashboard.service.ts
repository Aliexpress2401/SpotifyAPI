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
    title: 'ALBUM',
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
    type: 'links',
    title: 'PLAYLIST',
    route: 'playlists',
    description: 'Look Your Saved Playlists'
  },
  {
    id: 4,
    type: 'image',
    title: '',
    route: 'https://open.spotify.com/playlist/0njnvMkgsTb0wL8BFDwAGS',
    imageUrl: 'assets/images/playlist1.png',
    description: ''
  },
  {
    id: 5,
    type: 'number',
    title: '100',
    description: 'New Release Every Week'
  },
  {
    id: 6,
    type: 'links',
    title: 'TRACKS',
    route: 'tracks',
    description: 'Look Your Saved Tracks'
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
    title: 'PODCAST',
    route: 'podcasts',
    description: 'Look Your Saved Podcasts'
  },
  {
    id: 9,
    type: 'image',
    title: '',
    route: 'https://open.spotify.com/playlist/3a7rjnQwaLOHrOiYE99h1y',
    imageUrl: 'assets/images/playlist2.png',
    description: ''
  },
  {
    id: 10,
    type: 'number',
    title: '5',
    description: 'Raccomended Song'         
  },
  {
    id: 11,
    type: 'links',
    title: 'GET YOUR TOP 5 TRACKS ',
    description: 'From The Last 30 Days'
  },
  {
    id: 12,
    type: 'greenlinks',
    title: 'GET YOUR',
    route: 'you',
    description: 'User Profile'
  }
]
