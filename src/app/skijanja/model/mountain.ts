export class Mountain{
 _id: number;
  name: string;
  description: string;
  country: string;
  highest_point: string;
  top_elevation_m: string;
  base_elevation_m: string;
  picture: string;
  skiable_area_km:number;
  website: string
  runs: number;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || "";
    this.description = obj && obj.description || "";
    this.country = obj && obj.country || "";
    this.highest_point = obj && obj.highest_point || "";
    this.top_elevation_m = obj && obj.top_elevation_m || "";
    this.base_elevation_m = obj && obj.base_elevation_m || "";
    this.picture = obj && obj.picture || "";
    this.skiable_area_km = obj && obj.skiable_area_km || null;
    this.website =  obj && obj.website || "";
    this.runs = obj && obj.runs || null;
  }
}