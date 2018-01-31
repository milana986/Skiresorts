import { Component, OnInit , Input, Output , EventEmitter, OnChanges} from '@angular/core';

import {SkiresortService} from '../../services/skiresort.service';
import { CommentList } from "../../model/commentsList";
import { Comment } from "../../model/comments";

@Component({
  selector: 'ski-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {   
  @Input() commentList:CommentList;
  @Input() id: number;
  //@Output() emiter = new EventEmitter();
  activePage:number;
  pageSize:number = 4;
  numberOfPages:number;
  
  newComment: Comment = new Comment();

  constructor(private SkiresortService:SkiresortService) { }

  ngOnInit() {
    //this.numberOfPages = Math.ceil(this.commentList.count / this.pageSize); //probe radi
  }

  ngOnChanges(){
    this.activePage = 1;
    this.numberOfPages = Math.ceil(this.commentList.count / this.pageSize);
  }  

  pageChange(newPage){
    this.activePage = newPage;                                                       
    this.SkiresortService.getComments(this.id, {"page":this.activePage}).subscribe((data)=>{       
      this.commentList = data;
    })
  }

  onSubmit(){
    this.newComment.date = (new Date).toISOString();
    this.newComment.mountain_id = this.id;
    this.SkiresortService.saveComments(this.newComment).subscribe((data)=>{
      if(this.activePage == this.numberOfPages){
         this.commentList.results.push(data);
        //this.emiter.emit(this.newComment);
        this.newComment = new Comment();
      }
    })
  }


}




