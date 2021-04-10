import { Component, Input, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  isMission = false
  currentMission: any
  missions: any

  constructor(private spacexApiService: SpacexapiService) { }

  ngOnInit(): void {
    this.spacexApiService.sendGetRequest().subscribe(data=>{
      this.missions = data
    })
  }

  public onClick(details: any){
    if(!this.isMission){
      this.isMission = true
    }
    else{
      this.isMission = false
    }
    this.currentMission = details
  }
}
