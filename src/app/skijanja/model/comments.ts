export class Comment {
  _id: number;
  mountain_id:number;
  text: string;
  author: string;
  date:string

  constructor(obj?: any){
  	this._id = obj && obj._id || null;
  	this.mountain_id = obj && obj.mountain_id || null;
    this.text = obj && obj.text || "";
    this.author = obj && obj.author || "";
    this.date = obj && obj.date || "";
  }
}