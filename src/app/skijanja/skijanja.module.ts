import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { SkiresortsRoutingModule } from './skijanja-routing.module';
import { SkiresortService } from './services/skiresort.service';
import { SkiresortListComponent } from './skiresort-list/skiresort-list.component';
import { MountainPanelComponent } from './skiresort-list/mountain-panel/mountain-panel.component';
import { TracksComponent } from './skiresort-list/tracks/tracks.component';
import { RestaurantsComponent } from './skiresort-list/restaurants/restaurants.component';
import { CommentsComponent } from './skiresort-list/comments/comments.component';
import { GroupByPipe } from './group-by.pipe';
import { CapitalLetterPipe } from './capital-letter.pipe';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SkiresortsRoutingModule,
    NgbModule,
    FormsModule
  ],
  declarations: [SkiresortListComponent, MountainPanelComponent, TracksComponent, RestaurantsComponent, CommentsComponent, GroupByPipe, CapitalLetterPipe],
  providers: [SkiresortService]
})
export class SkijanjaModule { }
