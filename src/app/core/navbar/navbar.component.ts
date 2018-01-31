import { Component, OnInit } from '@angular/core';

import { SkiresortService } from '../../skijanja/services/skiresort.service';
import { SkiresortName } from '../../skijanja/model/skiresortName'

@Component({
  selector: 'ski-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  skiresortNames: SkiresortName[];

  constructor(private SkiresortService: SkiresortService) { }

  ngOnInit() {
  	this.SkiresortService.getNames().subscribe(data => { this.skiresortNames = data ;});
  }

}
