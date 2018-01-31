import { Component, OnInit ,Input } from '@angular/core';
import { Mountain } from '../../model/mountain';

@Component({
  selector: 'ski-mountain-panel',
  templateUrl: './mountain-panel.component.html',
  styleUrls: ['./mountain-panel.component.css']
})
export class MountainPanelComponent implements OnInit {
@Input() mountain:Mountain;
  constructor() { }

  ngOnInit() {
  }

}
