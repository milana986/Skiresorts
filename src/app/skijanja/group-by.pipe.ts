import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

 transform(value:any[]): any {  //value=tracks[]
   let red = value.filter((elem)=>{
     return elem.color == 'red';
   });
   let blue = value.filter((elem)=>{
     return elem.color == 'blue';
   });
   let black = value.filter((elem)=>{
     return elem.color == 'black';
   });
   let newArr:any[] = [blue, red, black];
   
   return newArr;

  }


}
