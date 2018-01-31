export class Restaurant {
  _id: number;
  name: string;
  description: string;
  picture:string;
  mountain_id:number;

  constructor(obj?: any){
  	this._id = obj && obj._id || null;
  	this.mountain_id = obj && obj.mountain_id || null;
    this.name = obj && obj.name || "";
    this.description = obj && obj.description || "";
    this.picture = obj && obj.picture || "";
  }
}