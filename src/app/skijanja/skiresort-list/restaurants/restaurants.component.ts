import { Component, OnInit , Input } from '@angular/core';

import { Restaurant } from '../../model/restaurants';

@Component({
  selector: 'ski-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
@Input() restaurant:Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
