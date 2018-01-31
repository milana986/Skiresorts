import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

import { SkiresortService } from '../services/skiresort.service';
import { Mountain } from '../model/mountain';
import { Track } from '../model/tracks';
import { Restaurant } from '../model/restaurants';
import { CommentList } from '../model/commentsList';
import { Comment } from '../model/comments';
import { GroupByPipe } from '../group-by.pipe';


@Component({
  selector: 'ski-skiresort-list',
  templateUrl: './skiresort-list.component.html',
  styleUrls: ['./skiresort-list.component.css']
})
export class SkiresortListComponent implements OnInit {
  mountain: Mountain;
  tracks: Track[];
  restaurants: Restaurant[];
  commentList: CommentList;

  constructor( private SkiresortService: SkiresortService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((params)=>{
  		let id:number = params['id'];       
                                                                                                                                                                                                                                                                                                                                
  	Observable.forkJoin(this.SkiresortService.getMountain(id), this.SkiresortService.getTracks(id),this.SkiresortService.getReaturants(id),this.SkiresortService.getComments(id))
  		.subscribe((data)=>{
  			this.mountain = data[0];                                                                                 
  			this.tracks = data[1];
  			this.restaurants = data[2];
        this.commentList = data[3];
  		});
  	});  
  }



}
