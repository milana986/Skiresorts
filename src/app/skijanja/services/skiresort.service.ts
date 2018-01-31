import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { SkiresortName } from '../model/skiresortName';
import { Mountain } from '../model/mountain';
import { Track } from '../model/tracks';
import { Restaurant } from '../model/restaurants';
import { Comment } from '../model/comments';
import { CommentList } from '../model/commentsList';

const url = "http://localhost:3000/api/skiresorts";

@Injectable()
export class SkiresortService {

  constructor(private http: HttpClient) { }

  getNames():Observable<SkiresortName[]>{
  let newArray:SkiresortName[] = [];
    return this.http.get(url).map((response:SkiresortName[]) =>{     
      response.forEach((elem)=>{
        newArray.push(new SkiresortName(elem));
      })
      return newArray;
      });
  }

  getMountain(id:number ):Observable<Mountain>{
   return this.http.get(url + "/" + id).map((response)=>{
     return new Mountain(response);
   })
  }

  getTracks(id: number, params?:any):Observable<Track[]>{
  let querryParams = {}
  if(params){
    querryParams = { params:new HttpParams()
      .set("sort", params.sort && params.sort.toString() || "rating")
    }
  }
  let newArray:Track[] = [];
    return this.http.get(url + "/" + id + '/tracks',querryParams).map((response:Track[]) =>{     
      response.forEach((elem)=>{
        newArray.push(new Track(elem));
      })
      return newArray;
      });
  }

  getReaturants(id: number):Observable<Restaurant[]>{
  let newArray:Restaurant[] = [];
    return this.http.get(url + "/" + id + '/restaurants').map((response:Restaurant[]) =>{     
      response.forEach((elem)=>{
        newArray.push(new Restaurant(elem));
      })
      return newArray;
      });
  }

  getComments(id: number, params?:any):Observable<CommentList>{
    let querryParams = {}
    if(params){
      querryParams = { params:new HttpParams()                       
        .set("page", params.page && params.page.toString() || "1")                                               
        .set("pageSize", params.pageSize && params.pageSize.toString() || "4")  
        .set("sort", params.sort && params.sort.toString() || "date")
        .set("sortDirection", params.sortDirection && params.sortDirection.toString() || "asc")
      }
    }
    return this.http.get(url + "/" + id + '/comments', querryParams).map((response) =>{     
       return new CommentList(response);
    });
  }

  saveComments(newComment):Observable<Comment>{
    return this.http.post(url + "/" + newComment._id + '/comments', newComment).map((response) =>{     
       return new Comment(response);  
    }); 
  }



}
