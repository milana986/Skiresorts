import { Component, OnInit , Input} from '@angular/core';

import { Track } from '../../model/tracks';
import { GroupByPipe } from '../../group-by.pipe';
import { CapitalLetterPipe } from '../../capital-letter.pipe';

@Component({
  selector: 'ski-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
@Input() tracks: Track[];

  constructor() { }

  ngOnInit() {
  }

  



  trackColor(index, track){}


}


