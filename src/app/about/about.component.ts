import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

leaders: Leader[];
selectedLeader: Leader;


  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaders = this.leaderService.getLeaders();
  }

  onSelect(leader: Leader) {        //OnSelect take a parameter of type Leader
    this.selectedLeader = leader;   //Set the export this.selectedLeader = the Leader provided 
  }

}
