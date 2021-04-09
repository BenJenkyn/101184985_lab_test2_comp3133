import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  missions: any

  constructor(private spacexApiService: SpacexapiService) {

  }

  ngOnInit(): void {
    this.spacexApiService.sendGetRequest().subscribe(data=>{
      this.missions = data
    })
  }

}
